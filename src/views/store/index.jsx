import React, { Component } from 'react'
import store from "../../store/store"


/**
 *
 * 1.1 this.forceUpdate()&this.setState()两个方法之间的区别
 *     this.forceUpdate()是调用render函数,为了让页面上的数据修改
 *     this.setState()是把render和整个生命周期都走了一遍
 * 1.2 点击触发store.dispatch
 */

export default class index extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            
            this.forceUpdate()
        })
    }
    render() {
        let {
            name
        }=store.getState().page
        return (
            <div>
                显示store仓库的
                <div>{name}<button onClick={()=>{
                    store.dispatch({
                        type:"CHANGE_NAME"
                    })
                }}>修改姓名</button></div>
            </div>
        )
    }
}
