"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("@material-ui/core/Button");
var TextField_1 = require("@material-ui/core/TextField");
var Typography_1 = require("@material-ui/core/Typography");
var React = require("react");
require("./App.css");
var styles_1 = require("@material-ui/core/styles");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: '#ff4400',
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            username: "kk",
            returnValue: "",
        };
        return _this;
    }
    App.prototype.search = function (user) {
        var _this = this;
        fetch("https://api.github.com/users/" + user).then(function (d) { return d.json(); })
            .then(function (d) {
            _this.setState({
                returnValue: d
            });
        });
    };
    App.prototype.changeState = function () {
        this.search(document.getElementById("name").value);
    };
    App.prototype.render = function () {
        var _this = this;
        if (this.state.returnValue == "") {
            return (React.createElement(styles_1.MuiThemeProvider, { theme: theme },
                React.createElement("h3", { style: { textAlign: "center" } }, " Find out more about a Github user by entering a name below! "),
                React.createElement("div", { style: { textAlign: "center" } },
                    React.createElement(TextField_1.default, { id: "name", label: "Name" }),
                    React.createElement(Button_1.default, { variant: "contained", style: { textAlign: "center" }, color: "primary", onClick: function (e) { return _this.search(document.getElementById("name").value); } }, " Check user "))));
        }
        if (this.state.returnValue.message == "Not Found") {
            return (React.createElement(styles_1.MuiThemeProvider, { theme: theme },
                React.createElement("h3", { style: { textAlign: "center" } }, " Username does not exist. Find another Github user below! "),
                React.createElement("div", { style: { textAlign: "center" } },
                    React.createElement(TextField_1.default, { id: "name", label: "Name" }),
                    React.createElement(Button_1.default, { variant: "contained", style: { textAlign: "center" }, color: "primary", onClick: function (e) { return _this.search(document.getElementById("name").value); } }, " Check user "))));
        }
        if (this.state.returnValue.message && this.state.returnValue.documentation_url == ("https://developer.github.com/v3/#rate-limiting"))
            return (React.createElement("h2", null, this.state.returnValue.message));
        return (React.createElement(styles_1.MuiThemeProvider, { theme: theme },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "centreText" }),
                React.createElement("div", { id: "details" },
                    React.createElement("a", { href: this.state.returnValue.html_url },
                        React.createElement("img", { src: this.state.returnValue.avatar_url, height: "225", width: "225" })),
                    React.createElement(Typography_1.default, { variant: "display3", gutterBottom: true }, this.state.returnValue.login),
                    React.createElement(Typography_1.default, { variant: "headline", gutterBottom: true }, this.state.returnValue.name),
                    React.createElement(List_1.default, { component: "info", style: { margin: "1px" } },
                        React.createElement(ListItem_1.default, { button: true, style: { width: "30%" } },
                            React.createElement("a", { href: this.state.returnValue.html_url },
                                React.createElement(ListItemText_1.default, { primary: "profile url: " + (this.state.returnValue.html_url), style: { fontSize: "13px" } }))),
                        React.createElement(ListItem_1.default, { button: true, style: { width: "30%" } },
                            React.createElement(ListItemText_1.default, { primary: "followers: " + (this.state.returnValue.followers) })),
                        React.createElement(ListItem_1.default, { button: true, style: { width: "30%" } },
                            React.createElement(ListItemText_1.default, { primary: "profile creation date: " + (this.state.returnValue.created_at) })),
                        React.createElement(ListItem_1.default, { button: true, style: { width: "30%" } },
                            React.createElement(ListItemText_1.default, { primary: "last repo update: " + (this.state.returnValue.updated_at) }))))),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement("h3", { style: { textAlign: "center" } }, " Find out more about a Github user by entering a name below! "),
            React.createElement("div", { style: { textAlign: "center", paddingBottom: "3%" } },
                React.createElement(TextField_1.default, { id: "name", label: "Name" }),
                React.createElement(Button_1.default, { variant: "contained", style: { textAlign: "center" }, color: "primary", onClick: function (e) { return _this.search(document.getElementById("name").value); } }, " Check user "))));
    };
    return App;
}(React.Component));
exports.default = App;
