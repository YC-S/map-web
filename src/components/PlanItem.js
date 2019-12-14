import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
   margin-bottom: 10px;
`;

class PlanItem extends React.Component {
    state = {
        inTrip: true,
    
    }

    handleDelete = () => {
        this.setState({inTrip: false});
        console.log(this.props.data.id + "delete clicked");
        setTimeout(() => {this.props.deletePointsFromPlan(this.props.data.id)}, 300)
    }


    // handleOnDragStart = (e) => {
    //     console.log('drag start at ' + e.target.id);
    //     this.props.setSourceId(e.target.id);
    // }

    // handleOnDragOver = (e) => {
    //     e.preventDefault();
    //     const { rearrangePointsInPlan, sourceId } = this.props;
    //     let target = e.target;
    //     while (target.id === "") {
    //         target = target.parentElement;
    //     }
    //     const targetId = target.id;      
    //     rearrangePointsInPlan(sourceId, targetId);
    // }



    // componentDidUpdate() {
    //     console.log('update');
    // }

    render() {
        const { data } = this.props;
        const { inTrip } = this.state;
        console.log(this.props.index);
        return (
            <Draggable
                draggableId={data.id}
                index={this.props.index}
                isDragDisabled={false}
            >
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        >
                    {
                        <div 
                        className={"plan-item"} style={{height: inTrip? "104px":"0", transition: "0.3s", visibility: inTrip ? "visible":"hidden"}}>
                        <img src={data.imgURL} alt=" " height="80" width="80" />
                        <div className="plan-item-description-and-button">
                            <div className='plan-item-description'>{data.description}</div>
                            <Button shape="round" size="small" type="danger" className="add-to-trip-button" onClick={this.handleDelete}>Delete</Button>
                        </div>
                    </div>} 
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default PlanItem;