import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './dash.css';
import queryString from 'query-string'

class Dash extends Component {

    componentDidMount() {
        let query = queryString.parse(this.props.location.search)
        if (query.token) {
            window.localStorage.setItem('jwt', query.token)
            this.props.history.push('/dash')
        } else {
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div className="bg">
                <div className="the-container">
                    <input className="input2" type="checkbox" id="toggle" />
                    <label className="label2" htmlFor="toggle"></label>
                    <div className="day-night-cont">
                        <span className="the-sun"></span>
                        <div className="the-moon"><span className="moon-inside"></span></div>
                    </div>
                    <div className="switch">
                        <div className="button">
                            <div className="b-inside"></div>
                        </div>
                    </div>
                    <div className="c-window">
                        <span className="the-sun"></span>
                        <span className="the-moon"></span>
                        <div className="the-fox">
                            <div className="fox-face">
                                <section className="eyes left"></section>
                                <section className="eyes right"></section>
                                <span className="nose"></span>
                                <div className="white-part"><span className="mouth"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                    <i className="fas fa-bars" id="btn"></i>
                    <i className="fas fa-times" id="cancel"></i>
                </label>
                <div className="sidebar">
                    <ul>
                        <li><a ><i className="fas fa-qrcode"></i>Dashboard</a></li>
                        <li><a href="/"><i className="fas fa-window-close"></i>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Dash)

