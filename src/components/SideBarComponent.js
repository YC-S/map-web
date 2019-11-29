import React from 'react';
import { Button } from 'antd';
class SideBarComponent extends React.Component {

    handleAddToTrip = () => {
        this.props.addPointsToPlan(this.props.componentData);
    };

    render() {

        const { componentData } = this.props;

        return (
            <div className='sidebar-component'>
                <img src={componentData.imgURL} alt=" " height="100" width="100" />
                <div className="sidebar-description-and-button">
                    <div className='sidebar-description'>{componentData.description}</div>
                    <Button shape="round" size="small" type="primary" className="add-to-trip-button" onClick={this.handleAddToTrip}>Add to trip</Button>
                </div>

            </div>
        );
    }
}

export default SideBarComponent;