import {useContext} from 'react';
import {Layout, Col, Row} from 'antd';
import './App.css';
import Filter from "./components/Filter";
import {Context as WeatherContext} from './context/weatherContext'
import WeatherTemperature from "./components/WeatherTemperature";

// const {Content} = Layout;

function App() {
    const {state, getWeatherData} = useContext(WeatherContext);

    console.log( 'keys', Object.keys(state.data).length);
    return (
        <Layout>
            <Row>
                <Col span={6} >
                    <Filter getData={getWeatherData}/>
                    {
                        Object.keys(state.data).length > 0 ?
                            <WeatherTemperature data={state.data}/>
                            : <p>sin datos</p>
                    }

                </Col>
                <Col span={18}>
                    {/*<Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>*/}

                        <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                            Content
                        </div>
                    {/*</Content>*/}
                </Col>
            </Row>

        </Layout>
    );
}

export default App;
