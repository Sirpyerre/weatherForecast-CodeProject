import {useContext} from 'react';
import {Layout, Col, Row} from 'antd';
import './App.css';
import Filter from "./components/Filter";
import {Context as WeatherContext} from './context/weatherContext'
import WeatherSummary from "./components/WeatherSummary";
import Graph from "./components/Graph";
import DetailsForecast from "./components/Details";

// const {Content} = Layout;

function App() {
    const {state, getWeatherData, getForecast} = useContext(WeatherContext);

    console.log("state", state)
    return (
        <Layout>
            <Row>
                <Col span={6}>
                    <Filter
                        getData={getWeatherData}
                        getForecast={getForecast}
                    />
                    {
                        Object.keys(state.data).length > 0 ?
                            <WeatherSummary
                                weather={state.data.weather}
                                wind={state.data.wind}
                                main={state.data.main}
                            />
                            : null
                    }

                </Col>
                <Col span={18}>
                    {/*<Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>*/}
                    <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                        {
                            Object.keys(state.forecast).length > 0 ? (
                                <>
                                    <Graph list={state.forecast.list}/>
                                    <DetailsForecast list={state.forecast.list}/>
                                </>
                            ) : null
                        }
                    </div>
                    {/*</Content>*/}
                </Col>
            </Row>

        </Layout>
    );
}

export default App;
