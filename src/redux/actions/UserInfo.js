
import {GETUSERDATE,DELUSERDATE} from '../constant'
export const getUserDate=data=> ({type:GETUSERDATE,data})
export const delUserDate=data=> ({type:DELUSERDATE,data})