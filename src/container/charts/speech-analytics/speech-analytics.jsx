import React, { Fragment } from 'react';
import { Card, Col, Row, Tab, Nav, Breadcrumb } from 'react-bootstrap';
import { SentimentColumnChart, EmotionColumnChart } from './columndata';
import { FrequentQuestionsChart } from './frequentquestionsdata';
import { ConversationAnalysisChart } from './conversationdata';
import { ConversationAnalysisPie } from './conversationanalysis';
import { TalkingSilencePieChart } from './talkingsilencepiedata';
import { TemasFrecuentesChart } from './temasfrecuentes';
import { DurationTimeChart } from './durationtimechart';
import { FCRChart } from './fcr-chart';
import { PalabrasFrecuentesChart } from './palabrasfrecuentes';

const SpeechAnalytics = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={12}>
                    <div className="breadcrumb-header" style={{marginBottom: 24}}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Speech Analytics</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Speech Analytics
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <style>
                                    {`
                                    .speech-tab-style .nav-link {
                                        color: #495057;
                                        position: relative;
                                        transition: color 0.3s ease;
                                    }
                                    .speech-tab-style .nav-link.active {
                                        color: #6A8BFF !important;
                                        background-color: transparent !important;
                                    }
                                    .speech-tab-style .nav-link::after {
                                        content: "";
                                        position: absolute;
                                        height: 3px;
                                        width: 100%;
                                        background-color: #6A8BFF;
                                        bottom: 0;
                                        left: 0;
                                        transform: scaleX(0);
                                        transform-origin: bottom left;
                                        transition: transform 0.3s ease;
                                    }
                                    .speech-tab-style .nav-link.active::after {
                                        transform: scaleX(1);
                                    }
                                    `}
                                </style>
                                <Nav variant="pills" className="nav nav-tabs speech-tab-style nav-justified mb-3 d-sm-flex d-block" id="speechTab" role="tablist">
                                    <Nav.Item>
                                        <Nav.Link
                                            eventKey="first"
                                            id="dashboard-tab"
                                            type="button"
                                            className="border-0 bg-transparent"
                                        >
                                            <i></i> Conversación
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            eventKey="second"
                                            id="sentiment-tab"
                                            type="button"
                                            className="border-0 bg-transparent"
                                        >
                                            Sentimiento
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            eventKey="third"
                                            id="words-tab"
                                            type="button"
                                            className="border-0 bg-transparent"
                                        >
                                            Preguntas frecuentes
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="tab-content" id="speechTabContent">
                                    <Tab.Pane className="tab-pane fade show" id="dashboard-tab-pane" role="tabpanel" eventKey="first"
                                        aria-labelledby="dashboard-tab" tabIndex={0} style={{ border: '0px' }}>
                                        <Row className="row-sm h-100">
                                            <Col xl={12} className="mb-3">
                                                <Card className="custom-card h-100" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Header>
                                                        <Card.Title>Análisis de conversación entre el agente y cliente</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <div id="conversation-analysis-chart" className="h-100">
                                                            <ConversationAnalysisChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={6} className="mb-3">
                                                <Card className="custom-card h-100" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Header>
                                                        <Card.Title>Promedio de conversaciones por minuto</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <div id="duration-time-chart" className="h-100">
                                                            <DurationTimeChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={6} className="mb-3">
                                                <Card className="custom-card h-100" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Header>
                                                        <Card.Title>Promedio de tiempo de silencio</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <div id="talking-silence-pie-chart" className="h-100">
                                                            <TalkingSilencePieChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={6}>
                                                <Card className="custom-card h-100" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Header>
                                                        <Card.Title>Análisis de Métricas de Conversación</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <div id="conversation-analysis-pie-chart" className="h-100">
                                                            <ConversationAnalysisPie />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={6}>
                                                <Card className="custom-card h-100" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Header>
                                                        <Card.Title>FCR (First Call Resolution)</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <div id="fcr-chart" className="h-100">
                                                            <FCRChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade" id="sentiment-tab-pane" eventKey="second"
                                        role="tabpanel" aria-labelledby="sentiment-tab" tabIndex={0} style={{ border: '0px' }}>
                                        <Row >
                                            <Col xl={6}>
                                                <Card className="custom-card" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Body>
                                                        <div id="sentiment-column-chart">
                                                            <SentimentColumnChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={6}>
                                                <Card className="custom-card" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Body>
                                                        <div id="emotion-column-chart">
                                                            <EmotionColumnChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade" id="words-tab-pane" role="tabpanel" eventKey="third"
                                        aria-labelledby="words-tab" tabIndex={0} style={{ border: '0px' }}>
                                        <Row className="row-sm h-100">
                                            <Col xl={6} className="mb-3">
                                                <Card className="custom-card h-100" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Header>
                                                        <Card.Title>Preguntas frecuentes</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <div id="frequent-questions-chart" className="h-100">
                                                            <FrequentQuestionsChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={6} className="mb-3">
                                                <Card className="custom-card h-100" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Header>
                                                        <Card.Title>Temas frecuentes</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <div id="temas-frecuentes-chart" className="h-100">
                                                            <TemasFrecuentesChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        
                                            <Col xl={6} className="mb-3">
                                                <Card className="custom-card h-100" style={{ border: '1px solid #BDCBFF' }}>
                                                    <Card.Header>
                                                        <Card.Title>Palabras frecuentes</Card.Title>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <div id="palabras-frecuentes-chart" className="h-100">
                                                            <PalabrasFrecuentesChart />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SpeechAnalytics;