import React, { Component } from 'react'
import List from "./list"
// import Context from "../../../utils/context"
import connect from "../../../utils/connect"

class page extends Component {
    render() {
        return (
            <div>
                {/* <Context.Consumer>
                    {
                        (props)=>{
                            return <div>{props.PageReducer.name}</div>
                        }
                    }
                </Context.Consumer> */}
                首页{this.props.name}
                <List count={1}/>
            </div>
        )
    }
}

export default connect((store)=>{
    console.log(store)
    return {
        ...store.PageReducer
    }
})(page)