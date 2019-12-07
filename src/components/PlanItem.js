import React from 'react';
import { Button } from 'antd';

class PlanItem extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className={"plan-item"} >
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