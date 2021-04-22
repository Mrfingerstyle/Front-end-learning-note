// import React from 'react'
// class App extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             x: 1
//         }
//     }
//     onClick = () => {
//         this.setState({
//             x: this.state.x + 1
//         })
//     }
//     // 建议下面这种 bug更少
//     onClick_2 = () => {
//         this.setState((state)=>({
//             x: state.x + 1
//         }))
//     }

//     render(){
//     return(
//         <div className="App">
//             APP 
//             <hr/>
//             <B name={this.state.x}/>
//             <button onClick={this.onClick_2}>+1</button>
//         </div>
//     )
// }
// }

// class B extends React.Component {
//     // 使用钩子
//     // 钩子 就是特殊的 函数

//     // 当组件接受新的props 会触发此钩子
//     // 但是这个钩子已经被弃用
//     // 更名为 
//     // UNSAFE_componentWillReceiveProps

//     // 学习这个钩子为了看懂旧代码

//     UNSAFE_componentWillReceiveProps(newProps, nextContent){
//         // 旧props
//         console.log(this.props);
//         // 新props
//         console.log(newProps);
//         console.log('props 变化了');
//     }
//     render(){
//         return(
//             <div>{this.props.name}</div>
//         )
//     }
// }

// export default App


// import React from 'react'
// // class App extends React.Component {
// // 设置为纯组件
// class App extends React.PureComponent {
//     constructor(props){
//         super(props)
//         this.state = {
//             n: 1
//         }
//     }
//     onClick = () => {
//         // 加1 减1 什么都没做 但是产生了新的对象 所以会重新渲染  
//         this.setState((state) => ({
//             n: state.n + 1
//         }))
//         this.setState((state) => ({
//             n: state.n - 1
//         }))
//         // {n:1} and {n:1}不是同一个对象
//         // 新对象和旧对象的地址不同
//         // react认为数据变了 其实数据没变 所以在此处使用shouldComponentUpdate 返回false 不执行render
//         // 正常情况下应该重新执行render 得到虚拟DOM
//         // 和上次的DOM对比 所以不更新UI

//         // react为什么不内置该功能
//         // 内置了
//         // 功能叫做 pureComponent
//     }

//     // 使用Pure Component
//     // 在render之前对新旧render进行对比 只对比一层
//     // shouldComponentUpdate(nextProps, nextState){
//     //     return (nextState.n === this.state.n) ? false : true
//     // }

//     // 质疑 
//     // 为什么要用要用新的对象
//     // 为什么不直接在this.state身上改呢 
//     // 后续说 触及到react编程哲学 

//     render(){
//         console.log('render 1 times')
//     return(
//         <div className="App">
//             APP 
//             <div>
//                 {this.state.n}
//                 <button onClick={this.onClick}>+1</button>
//             </div>
//         </div>
//     )
// }
// }

// import React from 'react'
// // class App extends React.Component {
// // 设置为纯组件
// class App extends React.PureComponent {
//     constructor(props){
//         super(props)
//         this.state = {
//             n: 1,
//             array: [1, 2, 3]
//         }
//     }
//     onClick = () => {
//         // 加1 减1 什么都没做 但是产生了新的对象 所以会重新渲染 
//         // 使用PureComponent默认判断数据是否变化 需不需要渲染
//         // this.setState((state) => ({
//         //     n: state.n + 1
//         // }))
//         // this.setState((state) => ({
//         //     n: state.n - 1
//         // }))

//         this.setState((state) => ({
//             n: state.n + 1
//         }))
//     }


    // render(){
    //     const x = (
    //         // 如果有两个div 
    //         // 1 外面加一个div
    //         // <react.Fragment></react.Fragment>
    //         // 只是占位作用 渲染完不显示
    //         // 可以简写为<></>
    //         // <React.Fragment>

    //         // render技巧
    //         // render 内写 if-else
    //         // render 内写 
    //         // render 内写 if-else


    //         <>
    //         <div>hi</div>
    //         <div className="App">
    //             APP 
    //             <div>
    //                 {this.state.n}
    //                 <button onClick={this.onClick}>+1</button>
    //             </div>
    //         </div>
    //         </>
    //         // </React.Fragment>
    //     )
    //     console.log(x); // 虚拟DOM
    //     return x
    // }


    // render(){
    //     let message
    //     if (this.state.n % 2 === 0) {
    //         message = <div>偶数</div>
    //     } else {
    //         message = <div>奇数</div>
    //     }
        
    //     return(
    //         <>
    //         {message}
    //         {this.state.n % 2 === 0 ? <div>偶数</div> : <div>奇数</div>}
    //         <button onClick={this.onClick}>add 1</button>
    //         {/* loop */}
    //         {/* 1 */}
    //         {this.state.array.map(
    //             n => <div key={n}>{n}</div>
    //         )}
    //         </>
    //     )
    // }

import React from 'react'
class App extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            n: 1,
            array: [1, 2, 3],
            width: undefined
        }
        // 使用ref获取宽度
        this.divRef = React.createRef()
    }
    onClick = () => {
        this.setState((state) => ({
            n: state.n + 1
        }))
    }
    // 挂载元素之后执行
    componentDidMount(){
        // const div = document.getElementById('xxx')
        // const {width} = div.getBoundingClientRect()
        // this.setState({width})

        const div = this.divRef.current
        const {width} = div.getBoundingClientRect()
        this.setState({width})
    }
    render(){
        return(
            <>
            {/* <div id="xxx">hello world {this.state.width}</div> */}
            <div ref={this.divRef}>hello world {this.state.width}px</div>
            </>
        )
    }
}

export default App
