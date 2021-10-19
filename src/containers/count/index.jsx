//引入UI组件
import CountUI from '../../components/ReduxDemo'
import { increment,decrement } from '../../redux/count_action'
//引入store
// import store from '../../redux/store'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
//--------------------------------------👇👇
/*
    mapStateToProps 用于传递状态
 */
// function mapStateToProps(state) {
//     return {count:state}
// }
/*
    mapDispatchToProps 用于传递操作方法
 */
// function mapDispatchToProps(dispatch) {
//     return {
//         add:number=>dispatch(increment(number)),
//         ddd:number=>dispatch(decrement(number))
//     }
// }
//!!!容器组件
//创建兵暴露一个count的容器组件
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
//--------------------------------------👆👆 一般写法
//--------------------------------------👇👇
export default connect(state=>({count:state}),{
    increment,
    decrement
})(CountUI)
//--------------------------------------👆👆 简便写法
//此写法已废弃，直接合并到当前页面。