import {GETUSERDATE,DELUSERDATE} from '../constant'
const userInfos=[{name:'李响',age:24,id:77}]
function userInfoReducer(preState=userInfos,action){
    console.log(2);
    const {type,data}=action
    switch (type) {
        case GETUSERDATE:
        return [...preState,data]
        case DELUSERDATE:
            const arr=preState.filter(item=>item.id!==data.id)
        return arr
        default:
           return userInfos
    }
}
export default userInfoReducer