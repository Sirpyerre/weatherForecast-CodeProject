import {Form, Input} from 'antd';

function Filter({getData}) {

    const onFinish = values => {
        console.log('Success:', values);
        getData(values.location);
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