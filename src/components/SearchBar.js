import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';



class SearchBar extends React.Component {

    onSelect = (value) => {
        console.log('onSelect', value);
        this.props.handleSelectLocation(value);
    }

    render() {
        const dataSource = this.props.dataSource;
        return (
            <div className={this.props.class} >
                <AutoComplete
                    className="search-bar"
                    dropdownClassName="search-bar-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 300 }}
                    onSelect={this.onSelect}
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={dataSource}
                    placeholder="Search location"
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
