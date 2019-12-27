import React from 'react';
import { Icon, Input, AutoComplete, Form } from 'antd';

class SearchBar extends React.Component {

    onSelect = (value) => {
        //console.log('onSelect', value);
        this.props.handleClickSearch(value);
    }

    onSubmit = e => {
        e.preventDefault();
        // verification comes inside here
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('Received values of search form: ', values);
                this.props.handleClickSearch(values.searchTerm);
            }
        });
    };



    render() {
        const { getFieldDecorator } = this.props.form;
        const dataSource = this.props.dataSource;
        return (
             <div className={this.props.class} >
                <Form onSubmit={this.onSubmit}>
                <Form.Item>
                {getFieldDecorator('searchTerm', {
                        rules: [{ required: false}],
                    })(
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
                    <Input suffix={<Icon type='search' onClick={this.onSubmit}/>}/>
                </AutoComplete>,
                    )}
                
                </Form.Item>
                </Form>
                
             </div>
        );
    }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(SearchBar);

export default WrappedAdvancedSearchForm;