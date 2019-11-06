import React, { Component } from 'react'
import Context from "../utils/context"

export default class provider extends Component {
    
    render() {
        let {
            store,
            children
        }=this.props
        return (
            <div>
                <Context.Provider value={store}>
                    {children} 
                </Context.Provider>
            </div>
        )
    }
}
