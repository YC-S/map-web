import React from 'react';
import SearchBar from "./SearchBar"
import { Button, Radio } from 'antd';

class SideBarTopContainer extends React.Component {
    render() {
        return (
            <div className="sidebar-top-container">
                <SearchBar class={"search-bar-wrapper-map-left"} dataSource={['cafe', 'Restaurant']} handleClickSearch={this.props.handleSearchPlace}/>
                <div className='map-page-sidebar-filter-buttons'>
                    <Radio.Group value={"large"} onChange={this.handleSizeChange}>
                        <Radio.Button>Events</Radio.Button>
                        <Radio.Button>Places</Radio.Button>
                        <Radio.Button>Restaurants</Radio.Button>
                    </Radio.Group>
                </div>


            </div>
        );
    }
}

export default SideBarTopContainer;