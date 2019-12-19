import React from 'react';
import { Button, Popconfirm } from 'antd';


class SideBarComponent extends React.Component {
    state = {
        inTrip: false,
    }

    handleAddToTrip = (e) => {
        // animation to hide this card
        this.setState(prevState => ({inTrip: !prevState.inTrip}));
        // add it to state in mapPage, add to database, add to cache?
        setTimeout(() => {this.props.addPointsToPlan(this.props.componentData)}, 300)

    };


    confirmAddPlace = () => {
        //this.setState({popConfirmDisabled: true});
        this.props.disablePopConfirm();
        this.handleAddToTrip();
    }

    render() {

        const { componentData, handleHoverSearchResult, popConfirmDisabled } = this.props;
        const { inTrip } = this.state;
        return (
            <div onMouseEnter={handleHoverSearchResult(componentData)} onMouseLeave={handleHoverSearchResult()} className='sidebar-component' style={{ height: inTrip? "0":"132px", transition: "0.3s", visibility: inTrip ? "hidden":"visible"}}>
                <img src={componentData.imgURL} alt=" " height="100" width="100" />
                <div className="sidebar-description-and-button">
                    <div className='sidebar-description'>{componentData.description}</div>
                    <Popconfirm placement="top" title={"Recommended 6 number of places have reached, are you sure about adding more?"} onConfirm={this.confirmAddPlace} okText="Yes" cancelText="No" disabled={popConfirmDisabled}>
                        <Button shape="round" size="small" type="primary" className="add-to-trip-button" onClick={popConfirmDisabled ? this.handleAddToTrip : null}>Add to trip</Button>
                    </Popconfirm>
                </div>


            </div>
        );
    }
}

export default SideBarComponent;