import {INCREMENT,DECREMENT} from '../constant'
console.log(1);
function count(preState=0,action){
    const {type,data}=action
    switch (type) {
        case INCREMENT:
        return preState+data*1
        case DECREMENT:
        return preState-data*1
        default:
           return preState
    }
}
export default count