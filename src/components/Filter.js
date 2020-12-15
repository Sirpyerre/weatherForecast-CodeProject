import {Form, Input} from 'antd';

function Filter({getData, getForecast}) {

    const onFinish = values => {
        getData(values.location);
        setTimeout(()=> {
            console.log("timeout");
            getForecast(values.location)
            console.log("getForecast");
        }, 900);
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