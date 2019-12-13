import React from 'react';
import { Button } from 'antd';

class PlanItem extends React.Component {
    state = {
        inTrip: true,
    }

    handleDelete = () => {
        this.setState({inTrip: false});
        console.log(this.props.data.id + "delete clicked");
        setTimeout(() => {this.props.deletePointsFromPlan(this.props.data.id)}, 300)
    }


    handleOnDragStart = (e) => {
        console.log('drag start at ' + e.target.id);
        this.props.setSourceId(e.target.id);
    }

    handleOnDragOver = (e) => {
        e.preventDefault();
        const { rearrangePointsInPlan, sourceId } = this.props;
        let target = e.target;
        while (target.id === "") {
            target = target.parentElement;
        }
        const targetId = target.id;      
        rearrangePointsInPlan(sourceId, targetId);
    }

    handleOnDrop = (e) => {
        e.preventDefault();
        this.props.setSourceId(null);
        console.log('drop!');
    }

    handleOnDragEnd =  () => {
        this.props.setSourceId(null);
        console.log('drag end!');
    }

    componentDidUpdate() {
        console.log('update');
    }

    render() {
        const { data } = this.props;
        const { inTrip } = this.state;
        const dragging = (this.props.sourceId == data.id);
        return (
            <div key={data.id} onDragOver={this.handleOnDragOver} onDragEnd={this.handleOnDragEnd} id={`${data.id}`} draggable="true" onDrop={this.handleOnDrop} onDragStart={this.handleOnDragStart} className={"plan-item"} style={{opacity: dragging ? "0" : "1", height: inTrip? "104px":"0", transition: "0.3s", visibility: inTrip ? "visible":"hidden"}}>
                <img src={data.imgURL} alt=" " height="80" width="80" draggable="false"/>
                <div className="plan-item-description-and-button">
                    <div className='plan-item-description'>{data.description}</div>
                    <Button shape="round" size="small" type="danger" className="add-to-trip-button" onClick={this.handleDelete}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default PlanItem;