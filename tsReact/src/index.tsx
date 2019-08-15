import React, { Component } from 'react';
import { render } from 'react-dom';
import { Pet } from './component/Pet';
import './asset/scss/index.scss';

render(
    <Pet name="Tuanzi" />,
    document.getElementById("app")
);