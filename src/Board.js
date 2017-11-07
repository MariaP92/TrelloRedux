import React, { Component } from 'react';
import './Board.css';
import Logo from './img/logo.png'
import { connect } from "redux-zero/react";
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';

const Header = () => {
    return (
        <div className="cabecera">
            <div className="mensaje">
                <img className="logoCabecera" src={Logo} />
            </div>
        </div>
    );
}

const Body = ({ AddTask }) => {
    // const Body = () => {
    return (
        <div className="contenedor" id="contenedorGeneral">
            <div id="cajitas" className="d-inlineblock">
                {/*     <button id="btnAddList" onClick={(e)=>AddTask(e)}>Add List ...</button> */}
                <button id="btnAddList" onClick={(e) => { AddTask(e) }}>Add List ...</button>
            </div>
            <Task />
        </div>
    );
}

const Task = () => {
    return (
        <div className="taskContainer">
            <input placeholder="Add a new list ..." />
            <Grid>
                <Row>
                    <Col md={6}>
                        <button id="btnSave">Save</button><p className="text--center">or<a>Cancel</a></p>
                    </Col>
                    <Col md={6}>
                        <p className="text--center">or<a>Cancel</a></p>
                    </Col> 
               </Row>
            </Grid>
            <textarea></textarea>
        </div>
    );
}
const Board = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}

const mapToProps = ({ cards }) => ({ cards });
export default connect(mapToProps)(Board);