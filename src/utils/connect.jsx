/**
 * 通俗来说：高阶组件通过包裹被传入的React组件,经过一系列处理,返回一个相对增强的React组件,供其他组件使用
 * connect withRouter 等高阶组件都存在一个匿名组件,高阶组件必须返回一个组件
 * 
 * 准备工作：封装了一个跨级传参组件(传入：Context.Provider,  传出：Context.Consumer)
 * sub1: 创建好的store到了哪里了? store位置:最初入口文件index.js
 * sub2：利用Context.Provider的方法,store就在components里的provider里,相当于父传子,
 *       但注意一点是必须写children(这个children相当于入口文件index.js的<App>)
 * sub3：每个组件都使用到了Context.Consumer()方法,So用class类继承封装
 * sub4：这里有一个转折?
 *       是传递到页面上的是 store 里面的所有数据,
 *       举例：假如你是去商店里买东西,商家是不知道你要买什么东西,但你自己知道自己需要买什么东西,
 *            所以是把所有的数据放在你面前,才可以知道传递那个数据
 * sub5：定义回调函数&调用回调函数之间可以开发一个通道,把props(store)传给页面上,页面的回调函数返回对应的需要的数据
 */


import React,{Component} from "react"
import Context from "./context"

const connect=(cbk)=>{
    return (Com)=>{
        return class extends Component{
            render(){
                return(
                    <div>
                        <Context.Consumer>
                            {
                                (props)=>{
                                    // props:是Context.Provider()传入的store
                                    let res=cbk(props)
                                    return <Com {...res} {...this.props}/>
                                }
                            }
                        </Context.Consumer>
                    </div>
                )
            }
        }
    }
}

export default connect