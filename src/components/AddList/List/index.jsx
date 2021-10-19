import React, { Component } from 'react'
export default class List extends Component {
    //点击选中/取消
    checkedChange=(e)=>{
        this.props.handChecked(e)
    }
    render() {
       let {listAry}=this.props
        return (
            <div>
                <ul>
                    {
                      listAry.map((item) => {
                          return (
                              <li key={item.id}>
                                  <label >{item.name}<input type="checkBox" name="name" checked={item.status}  onChange={(e)=>{this.checkedChange(item)}} readOnly/></label>
                              </li>
                          )
                      })
                    }
                    
                </ul>
            </div>
        )
    }
}
