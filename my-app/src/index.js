"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
var registerServiceWorker_1 = require("./registerServiceWorker");
var router_1 = require("./router");
ReactDOM.render(React.createElement(router_1.AppRouter, null), document.getElementById('root'));
registerServiceWorker_1.default();
