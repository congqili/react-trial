import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import main from './index.module.less'
import {Route,Switch,Redirect} from 'react-router-dom'
import PageRouter from '../RouterDemo'
import PageRedux from '../ReduxDemo'
import PageNetWork from '../Networlk/one'
import Other from '../Other'
import {withRouter} from "react-router-dom"
class Home extends Component {
  state = {
    current: 'router',
  };

  handleClick = e => {
    // console.log('click ', e);
    this.setState({ current: e.key });
    this.props.history.push(`/${e.key}`)
    // console.log(this.props);
  };

  render() {
    const { current } = this.state;
    return (
      <div className={main.main}>
        <div>
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="router" icon={<MailOutlined />}>
              路由
            </Menu.Item>
            <Menu.Item key="redux" icon={<AppstoreOutlined />}>
              redux
            </Menu.Item>
            <Menu.Item key="network" icon={<SettingOutlined />}>
              props
            </Menu.Item>
            <Menu.Item key="other" icon={<SettingOutlined />}>
              other
            </Menu.Item>
          </Menu>
        </div>
        <div className={main.content}>
          <Switch>
          <Route path="/router" component={PageRouter}/>
          <Route path="/redux" component={PageRedux}/>
          <Route path="/network" component={PageNetWork}/>
          <Route path="/other" component={Other}/>
          <Redirect to="/router"/>
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(Home)