import React from 'react';
import PLanItem from './PlanItem';
import Arrow from './Arrow';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Button } from 'antd';
import { PlanService } from '../api/PlanServices';
import { PlanSettingModal } from './PlanSettingModal';


class MyPlanContainer extends React.Component {

    state = {
        sourceId: null,
        targetId: null,
        dragging: false,
        editing: false,
        planSettingVisible: false,
    }

    setSourceId = (id) => {
        this.setState({ sourceId: id });
    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        this.setState({ dragging: false })
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }
        this.props.rearrangePointsInPlan(destination.index, source.index, draggableId);
    }

    setDragging = (isDragging) => {
        this.setState({ dragging: isDragging });
    }

    handleClickEdit = () => {
        this.setState({ editing: true });
        this.props.handleDisableRoute();
    }

    handleHidePlanSetting = () => {
        this.setState({ planSettingVisible: false });
    }

    handleClickSavePlan = () => {
        const { pointsInPlan, planId, showLogin } = this.props;
        if (localStorage.getItem("username")) {
            // user logged in
            // if ther is no planId paramter in url
            if (planId) {
                // update plan
                PlanService.updatePlan(localStorage.getItem('username'), planId, pointsInPlan)
                    .then(() => {
                        console.log('Plan successfully updated!');
                    })
                    .catch(err => {
                        console.log('Could not update plan: ' + err);
                    })
                this.setState({ editing: false });
                this.props.handleEnableRoute();
            } else {
                // open plan setting modal to create a new plan
                this.setState({ planSettingVisible: true });
            }
        } else {
            // guest user
            // open login modal
            showLogin();
        }

    }

    handleCreatePlan = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ planSettingVisible: false, editing: false });
            this.props.setPlanTitle(values.title);

            // call create plan api and get back an id
            // assign the id to planId 
            // ************ code goes here ***************
            //
            //
        });
    }

    // save child form ref in this component
    saveFormRef = formRef => {
        this.formRef = formRef;
    };


    render() {
        const { pointsInPlan, deletePointsFromPlan, showRoute, routeObj, planTitle } = this.props;
        const { dragging, editing, planSettingVisible } = this.state;
        return (
            <div>
                <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
                    <div className={"plan-container"} >
                        <h1 className="plan-title">{planTitle}</h1>
                        <Droppable droppableId={"drop_area_1"}>
                            {provided => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    {...provided.droppablePlaceholder}
                                >
                                    {pointsInPlan.map((point, ind) =>
                                        <div key={point.id}>
                                            {ind === 0 || !showRoute || dragging ? null : <div className="arrow-and-time">
                                                <Arrow />
                                                {showRoute && routeObj && (routeObj.routes[0].legs.length === pointsInPlan.length - 1) ?
                                                    <div style={{ textAlign: "center" }}>{Math.ceil(routeObj.routes[0].legs[ind - 1].duration / 60)} min </div> : null}
                                            </div>}
                                            <PLanItem editing={editing} setDragging={this.setDragging} index={ind} data={point} deletePointsFromPlan={deletePointsFromPlan} />
                                        </div>
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        {pointsInPlan.length > 0 ?
                            (<div>
                                {editing ? null : <Button id="plan_edit_button" type="primary" onClick={this.handleClickEdit}>Edit</Button>}
                                {editing ? <Button id="plan_save_button" type="danger" onClick={this.handleClickSavePlan}>Save Changes</Button> : null}
                            </div>) : null}
                    </div>
                </DragDropContext>
                <PlanSettingModal wrappedComponentRef={this.saveFormRef} visible={planSettingVisible} onCancel={this.handleHidePlanSetting} onCreate={this.handleCreatePlan} />
            </div>
        );
    }
}

export default MyPlanContainer;