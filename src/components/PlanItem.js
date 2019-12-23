import React from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';


const Container = styled.div`
   margin-bottom: 10px;
`;

class PlanItem extends React.Component {
    state = {
        inTrip: true,
    
    }

    handleDelete = (e) => {
        this.setState({inTrip: false});
        console.log(this.props.data.id + "delete clicked");       
        setTimeout(() => {this.props.deletePointsFromPlan(this.props.index)}, 300)
    }

    handleMouseDown = () => {
        this.props.setDragging(true);
    }

    handleDuplicate = () => {
        this.props.addPointsToPlan(this.props.data, this.props.index);
    }

    render() {
        const { data, setDragging, editing } = this.props;
        const { inTrip } = this.state;
        return (
            <Draggable
                draggableId={data.draggingId}
                index={this.props.index}
                isDragDisabled={!editing}
            >
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        >
                    {
                        <div id={`planItem${data.draggingId}`}
                        onMouseDown={this.handleMouseDown} onMouseUp={()=> {setDragging(false)}}
                        className={"plan-item"} style={{height: inTrip? "130px":"0", transition: "0.3s", visibility: inTrip ? "visible":"hidden"}}>
                        <img src={data.imgURL} alt=" " height="110" width="110" />
                        <div className='plan-item-description'>
                            <h1>{data.name}</h1>
                            <p>{data.category} <br/>Address: {`${data.location.address1} ${data.location.address2} ${data.location.address3}, ${data.location.city}`}<br/>Approximate time: 1.5 hrs</p>
                        </div>
                        <div style={{width: editing?"56px":"0", transition: "0.3s", display: "flex"}}>
                        <Button style={{visibility: editing? "visible":"hidden"}} onMouseDown={(e) => {e.stopPropagation()}} shape="circle" size="small" type="danger" className="add-to-trip-button" onClick={this.handleDelete}><FontAwesomeIcon icon={faMinus} /></Button>
                        <Button style={{visibility: editing? "visible":"hidden"}} onMouseDown={(e) => {e.stopPropagation()}} shape="circle" size="small" type="primary" className="add-to-trip-button" onClick={this.handleDuplicate}><FontAwesomeIcon icon={faPlus} /></Button>
                        </div>
                    </div>} 
                    </Container>
                )}
            </Draggable>
        );
    }
}

export default PlanItem;