import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "../router/RouterView"
import "../styles/home.css"

export default class home extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="home">
                <header className="header">
                    猫眼电影
                </header>
                <main className="main">
                    <RouterView routes={this.props.children}></RouterView>
                </main>
                <footer className="footer">
                    <NavLink to="/home/movie">电影</NavLink>
                    <NavLink to="/home/cinema">影院</NavLink>
                    <NavLink to="/home/my">我的</NavLink>
                </footer>
            </div>
        )
    }
}
