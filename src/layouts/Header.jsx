import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default () => {
    return (
            <Row className="header align-center items-center">
                <Col xs={4} className="header-bar">
                    <img src="/images/header-bar.png" alt="" />
                </Col>
                <Col xs={4} className="header-logo">
                    <img src="/images/logo.png" alt="" />
                </Col>
                <Col xs={4} className="header-action">
                <Button variant="secondary" className='float-right'>LOGIN</Button>{' '}
                </Col>
                <Col xs={4} className="header-currency hidden">($) USD</Col>
            </Row>
    )
}