import React from 'react';
import { Redirect } from 'react-router-dom';
import TopNavBar from "./TopNavBar"
import SearchCard from "./SearchCard"
import WrappedAdvancedSearchForm from "./SearchBar"
import AuthorizationModal from "./AuthorizationModal"



class Landing extends React.Component {
    state = {
        visibleLogin: false,
        visibleRegister: false,
        toMap: false
    }

    setToMap = (toMap) => {
        this.setState({toMap: toMap});
    }

    showLogin = () => {
        this.setState({
            visibleLogin: true,
            visibleRegister: false,
        });
    }

    showRegister = () => {
        this.setState({
            visibleLogin: false,
            visibleRegister: true
        });
    }

    hideForm = () => {
        this.setState({
            visibleLogin: false,
            visibleRegister: false
        })
    }

    handleSelectLocation = (location) => {
        // jump to map page with corresponding coordinates
        const locations = {
            'Seattle': [-122.335167, 47.608013],
            'San Francisco': [-122.431297, 37.773972],
            'Chicago': [-87.623177, 41.881832],
        }
        const selectedLoc = locations[location];
        this.props.history.push(`/map?lng=${selectedLoc[0]}&lat=${selectedLoc[1]}`)
    }

    render() {
        if (this.state.toMap) {
            return <Redirect to='/map?lng=-122.335167&lat=47.608013&plan=null' />
        }
        return (
            <div className="landing">
                <TopNavBar showLogin={this.showLogin} showRegister={this.showRegister}/>
                <WrappedAdvancedSearchForm class={"search-bar-wrapper-landing"} dataSource={['Seattle', 'Chicago', 'San Francisco']} handleSelectLocation={this.handleSelectLocation}/>
                <AuthorizationModal visibleLogin={this.state.visibleLogin} visibleRegister={this.state.visibleRegister} hideForm={this.hideForm} setToMap={this.setToMap} showRegister={this.showRegister}/>
            </div>
        );
    }
}

export default Landing;