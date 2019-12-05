import React from 'react';
import { Button } from 'antd';
class SideBarComponent extends React.Component {
    state = {
        inTrip: false
    }

    handleAddToTrip = (e) => {
        // animation to hide this card
        this.setState(prevState => ({inTrip: !prevState.inTrip}));
        // add it to state in mapPage, add to database, add to cache?
        setTimeout(() => {this.props.addPointsToPlan(this.props.componentData)}, 300)

    };

    render() {

        const { componentData, handleHoverSearchResult } = this.props;
        const { inTrip } = this.state;
        return (
            <div onMouseEnter={handleHoverSearchResult(componentData)} onMouseLeave={handleHoverSearchResult()} className='sidebar-component' style={{ height: inTrip? "0":"132px", transition: "0.3s", visibility: inTrip ? "hidden":"visible"}}>
                {/* Different visual effect: empty the box first */}
                {/*{inTrip ? null : (<div style={{display: "inherit"}}>*/}
                {/*        <img src={componentData.imgURL} alt=" " height="100" width="100" />*/}
                {/*        <div className="sidebar-description-and-button">*/}
                {/*            <div className='sidebar-description'>{componentData.description}</div>*/}
                {/*            <Button shape="round" size="small" type="primary" className="add-to-trip-button" onClick={this.handleAddToTrip}>Add to trip</Button>*/}
                {/*        </div>*/}
                {/*</div>)}*/}
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