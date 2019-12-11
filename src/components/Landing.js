import React from 'react';
import TopNavBar from "./TopNavBar"
import SearchCard from "./SearchCard"
import WrappedAdvancedSearchForm from "./SearchBar"
import AuthorizationModal from "./AuthorizationModal"


class Landing extends React.Component {
    state = {
        visibleLogin: false,
        visibleRegister: false,
    }

    showLogin = () => {
        this.setState({
            visibleLogin: true
        });
    }

    showRegister = () => {
        this.setState({
            visibleRegister: true,
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
        return (
            <div className="landing">
                <TopNavBar showLogin={this.showLogin} showRegister={this.showRegister}/>
                <WrappedAdvancedSearchForm class={"search-bar-wrapper-landing"} dataSource={['Seattle', 'Chicago', 'San Francisco']} handleSelectLocation={this.handleSelectLocation}/>
                <AuthorizationModal visibleLogin={this.state.visibleLogin} visibleRegister={this.state.visibleRegister} hideForm={this.hideForm}/>
            </div>
        );
    }
}

export default Landing;