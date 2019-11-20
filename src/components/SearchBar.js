import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';
const { Option } = AutoComplete;



class SearchBar extends React.Component {
    state = {
        dataSource: [],
    };

    onSelect = (value) => {
        console.log('onSelect', value);
    }



    render() {
        const dataSource = ['Seattle', 'San Francisco', 'New York'];
        return (
            <div className="search-bar-wrapper" >
                <AutoComplete
                    className="search-bar"
                    dropdownClassName="search-bar-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 300 }}
                    onSelect={this.onSelect}
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={dataSource}
                    placeholder="Location"
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    optionLabelProp="value"
                >
                    <Input suffix={<Icon type="search" />} />
                </AutoComplete>
            </div>
        );
    }
}

export default SearchBar;
