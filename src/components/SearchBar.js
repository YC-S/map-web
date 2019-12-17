import React from 'react';
import { Icon, Input, AutoComplete, Button, Form } from 'antd';
import { he } from 'date-fns/locale';



class SearchBar extends React.Component {

    onSelect = (value) => {
        console.log('onSelect', value);
        this.props.handleSelectLocation(value);
    }

    onSubmit = e => {
        e.preventDefault();
        // step for verification comes inside here
        this.props.form.validateFields((err, value) => {
            if (!err) {
                console.log('Received values of search form: ', value);
                debugger;
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
                        rules: [{ required: true, message: 'Please input wheat you want to search!' }],
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
