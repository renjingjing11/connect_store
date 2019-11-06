import {createStore,combineReducers} from "redux"

/**
 * 若直接执行这个单独文件夹,执行命令是：node index.jsx
 * 
 * let createStore=require("redux").createStore
 * let combineReducers=require("redux").combineReducers
 *  */


function PageReducer(initState,action){
    // console.log("action",action.type)  在没有合并两个reducer的情况下,首先走的是createStore(PageReducer)=>dispatch()
    switch(action.type){
        case "CHANGE_NAME":
        return {
            //...initState:这样的写法是先深拷贝,复制一份新的,指针指向新的内存地址,
            // 展开展示所有的数据,后面修改name会直接覆盖前面的
            ...initState,
            name:"gai"
        }
        default:
        return {
            name:"任明明"
        }
    }
}

function ListReducer(initState={name:"list"},action){
    return initState
}

let bigStore=combineReducers({
    page:PageReducer,
    list:ListReducer
})

let Store=createStore(bigStore)


/**
 * dispatch:分发action action是要修改state的状态
 * 所以在PageReducer里打印的action执行了两次,并且执行的两次结果是一样的,都是{name:"任明明"}
 */
// Store.dispatch({
//     type:"CHANGE_NAME"
// })
// Store.dispatch({
//     type:"CHANGE_NAME"
// })
// console.log(Store.getState())

export default Store

/**console.log(Store)
 * Store有5种方法：dispatch subscribe getState replaceReducer Symbol
 * dispatch:分发action
 * action:修改reducer某个状态的描述体
 * getState:获取reducer里的状态
 * 
 **** reducer被触发时,他默认state接受的是上次reducer的返回值***
 *  */