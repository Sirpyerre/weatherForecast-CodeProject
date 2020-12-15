import {Form, Input} from 'antd';

function Filter() {

    const onFinish = values => {
        console.log('Success:', values);
    };



    return (
        <div className="filter">
            <Form name="filter-location" onFinish={onFinish}>
                <Form.Item name="location" label="Your city">
                    <Input/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Filter;