import React, { Component } from 'react'
// import Context from "../../../utils/context"
import connect from "../../../utils/connect"

 class list extends Component {
    render() {
        return (
            <div>
                {/* <Context.Consumer>
                    {
                        (props)=>{
                            return <div>{props.ListReducer.name}</div>
                        }
                    }
                </Context.Consumer> */}
                列表{this.props.name}
            </div>
        )
    }
}
export default connect((store)=>{
    return {
        ...store.ListReducer
    }
})(list)
