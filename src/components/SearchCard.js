import React from 'react';
import DatePicker from "react-datepicker";
import {Button} from 'antd';



class SearchCard extends React.Component {
    state = {
        city: '',
        startDate: new Date(),
        endDate: new Date()
    };


    handleStartDateChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleEndDateChange = date => {
        this.setState({
            endDate: date
        });
    };

    handleCityChange = (event) => {
        this.setState({city: event.target.value});
    }

    handleSubmit = (e) => {
        console.log('form submitted!');
        console.log('Selected city: ' + this.state.city);
        console.log('Start date: ' + this.state.startDate + ' End date: ' + this.state.endDate);
        e.preventDefault();
    }

    render() {
        return (
            <div className="search-card">
                <div>
                    <div className="search-card-title">
                        <p>Find places to travel..</p>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>


                            <div className="search-card-item">
                                <label>
                                    <div>WHERE</div>
                                    <input type="text" value={this.state.city} onChange={this.handleCityChange} name="city" placeholder="Seattle, San Francisco..."/>
                                </label>
                            </div>
                            <div className="search-card-item date-items">
                                <label>
                                    <div>START</div>

                                    <DatePicker

                                        selected={this.state.startDate}
                                        onChange={this.handleStartDateChange}
                                    />
                                </label>
                                <label>
                                    <div>END</div>
                                    <DatePicker

                                        selected={this.state.endDate}
                                        onChange={this.handleEndDateChange}
                                    />
                                </label>
                            </div>
                            <div className="submit-button">
                                <Button type="danger" size={'large'} htmlType="submit">
                                Search</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchCard;