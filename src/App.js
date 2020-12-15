import {Layout, Col, Row} from 'antd';
import './App.css';
import Filter from "./components/Filter";

// const {Content} = Layout;

function App() {
    return (
        <Layout>
            <Row>
                <Col span={6} >
                    <Filter/>
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
