1,meta：
    name="viewport"                 主要用于移动端适配
    name="theme-color"              移动端主题色
    name="description"              搜索引擎截取网页简介用
2,link:
    rel="manifest"                  甲壳用于生成安卓，ios嵌套
    rel="apple-touch-icon"          苹果点击图标
3,noscript:                         浏览器不支持执行
4,robots.txt:                       爬虫规则文件
5,pubsubjs:                         兄弟之间传参插件
6,ajax--xhr , fetch window自带:     区别
7,结构+重命名 ---深层解构+重命名
8,路由：react-router-dom                                           
    1，最外层包裹：browserouter
    2,<Link to='/xxx'>name</Link> NavLink(进阶) --(也可进行二次封装)
    3,<Route exact={boolea}} path='/xxx' component={comName}></Route> (exact 是否严格匹配，不推荐 )
    4,一般组件components,路由组件page
    5,<Switch> 当路径较多的时间添加，进行单一匹配      
    6,<Redirect> 重定向一般放在标签最后（可匹配默认值）
    ---------|---------    
    7,querystring插件，用于解析路径参数为obj
    8,search ?abc=${121}&&bck=&{32443}                                  |
    9,params /123/32443    to="patch/:abc/bck"                          | 三种传参
    10,state route 标签写  state={abc:123,bck:32443}   ， ，					   |
    11,router 加 replace={true} 属性   将会替换路由当前值
    12,编程式导航，history /go/back/push/replace
    13,widthRouetr(component) 加工一般组件，具备路由组件所有的api
9,使用ant-design (antd)
    1,设置按需加载antd高级配置 
    2,自定义主题
10,redux
    redux_test
    redux
    getState()
    dispatch()
    subscribe()
    redux-thunk                     异步中间件
    react-redux                     容器组件
    Provider                        使用此组件包裹app所有的容器组件将不用传store
    容器包裹ui组件，我认为目的方便统一管理
                                         汇总所有的值为一个对象
11,打包 npm run build
    npm i serve -g                       模拟服务器（serve 文件名）
12，扩展
    1,setdate  (对象)setDate(obj,callback)    状态更新后执行，与vue&nextick相识
               (函数)setState(fun(state,prop){return {aa,state.aa}}) 依赖状态时，使用 (state)
    2,lazy     const Home=lazy(()=>import("../home")) 在react内部
               需要在路由外加   <Suspense callback={<h1>正在加载</h1>}...</Suspense>
    3,Hooks    模拟组件
               1, const  [name,setName]=React.useState('')  name:key,setName:改变name的函数
                    setName('李响') 一般写法   setName(name=>'李响'+'1')回调写法
               2,React.useEffect(()=>{},[])   []时相当于类组件的conponentDidMontnd，某个值时相当于vue的watch
               ()=>{return ()=>{相当于componentWillUnmount()}} 
               3,在函数中 const myRef=React.useRef()   等价：createRef
    4,fragment 与<></> 相似 不渲染标签 ，区别fragment可以添加key
    5,context  MyContext=react.createContext()      const {Provider} = MyContext
               包裹子标签   <Provider value={xxx}>zi</Provider> 
               下面的所有的子标签子子子子标签都可以收到参数    需 static contextType=MyContext 接收     
               Consumer  用于函数组件  直接this.context 获取
13,shouldComponentUpdate(nextProps,nextState) 生命钩子:模板是否更新
14,PureComponent 解决父组件改变，子组件进行没必要的渲染。
15,插槽 
16,错误边界（适用于生产）  static getDerivedStateFromErro(error){ return {hasError:error}} 生命周期
            {this.state.hasError?<h1>出错了</h1>:<children/>}
            componentDidCatch(){//生命周期统计错误，发送给后台}