import React from 'react';
import { Button } from 'antd';

class PlanItem extends React.Component {
    state = {
        inTrip: true
    }
    handleDelete = () => {
        this.setState({inTrip: false});
        console.log(this.props.data.id + "delete clicked");
        setTimeout(() => {this.props.deletePointsFromPlan(this.props.data.id)}, 300)
    }
    render() {
        const { data } = this.props;
        const { inTrip } = this.state;
        return (
            <div className={"plan-item"} style={{ height: inTrip? "104px":"0", transition: "0.3s", visibility: inTrip ? "visible":"hidden"}}>
                <img src={data.imgURL} alt=" " height="80" width="80" />
                <div className="plan-item-description-and-button">
                    <div className='plan-item-description'>{data.description}</div>
                    <Button shape="round" size="small" type="danger" className="add-to-trip-button" onClick={this.handleDelete}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default PlanItem;