import React from 'react';

class SideBarComponent extends React.Component {

    render() {
        const { componentData } = this.props;
        return (
            <div className='sidebar-component'>
                <img src={componentData.imgURL} alt=" " height="100" width="100" />
                <p className='sidebar-description'>{componentData.description}</p>
            </div>
        );
    }
}

export default SideBarComponent;