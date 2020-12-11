# BURBERRY项目文件夹

## 目录结构

```text
  + assets                资源文件夹(第三方资源)
    - jquery
    - bootstrap
    - jquery-pageination
    - jquery-validation
    - swiper
  + font                  项目需要用到的 矢量图标 文件(第三方资源)
    - demo.css
    - iconfont.css
    - iconfont.eot
    - iconfont.js
    - iconfont.json
    - iconfont.svg
    - iconfont.ttf
    - iconfont.woff
    - iconfont.wpff2
  + css                   项目需要用到的 css 文件
    - index.css
    - cart.css
    - detail.css
    - list.css
    - logion.css
    - public.css
  + images                项目需要用到的 图片 文件
    - bag-banner.jpg
    - banner1.jpg
    - banner2.jpg
    - banner3.jpg
    - banner4.jpg
    - burberry-logo.jpg
    - center1.jpg
    - center2.jpg
    - center3.jpg
    - center4.jpg
    - center5.jpg
    - center6.jpg
    - center7.jpg
    - center8.jpg
    - center9.jpg
    - last1.jpg
    - last2.jpg
    - list.last1.jpg
    - list.last2.jpg
    - list.last3.jpg 等
  + js                    项目需要用到的 js 文件
    - cart.js
    - detail.js
    - index.js
    - list.js
    - login.js
    - public.js
  + server                项目需要用到的 后端 书写
    - getGoodInfo.php
    - getList.php
    - login.php
  - index.html            首页
  - cart.html             购物车页面
  - detail.html           商品详情页面
  - list.html             商品列表页面
  - login.html            登录页面
```


## 导入数据库
+ 打开 mysql 可视化工具
    - 新建一个 `database` 叫做 `bk2004`
    - 导入 `goods.sql` 的文件
+ 创建表格
    - 新建一个表格, 叫做 `user`
    - 创建用户信息
      => user_id: 1   username: admin   password: 123456   nickname: 管理员
      => user_id: 2   username: huahua  password: 666888   nickname: 花花
      => user_id: 3   username: zhangsan  password: 888888   nickname: 张三


## index.html 页面布局 和 功能的实现
+ 页面头部(logo部分 搜索 按钮)
    - 登录 按钮(跳入 用户登录 页面)
    - 导航栏部分  移入自动出现 下拉菜单
+ 页面头部("购买佳节礼品"文字)
    - 点击 文字, 可跳转 商品列表 页面
+ 搜索引擎
    - 使用 百度的数据
    - 根据文本框内容出现相应搜索记录
+ 轮播图区域
    - 自动轮播图
    - 进入页面, 开启自动轮播
    - 点击左右按钮, 可向左或向右切换图片
    - 拉动下面滚动条也可切换图片
+ 购物车按钮
    - 点击 购物车 按钮, 可跳转 购物车 页面



## login.html 页面布局 和 功能的实现
+ 登录窗口
    - 点击登录按钮, 获取后端数据
      => 进行表单验证
      => 验证通过后, 跳转首页


## list.html 页面布局 和 功能的实现
+ 筛选区域
    - 通过点击头部导航的'li'各部分发送 jsonp 请求, 接受后端数据
    - 根据 li里的各品类名称 来筛选后端符合条件的数据(li里的各品类名称 => 后端的cat_one_id) 
      然后根据返回的数据来渲染 列表信息
    - 点击 图片
      => 跳转 商品详情 页面
    - 点击 “加入购物车”/“去购买”
      => 跳转 购物车 界面

    筛选区域中间部分信息区域
    - 点击“包款”/“风衣”/“围巾”名称, 可进入 购物车 页面
    


## detail.html 页面布局 和 功能的实现
+ 渲染页面
    - 通过后端返回的数据
    - 渲染商品详细信息
    - 商品图片
    - 商品描述
    - 商品价格
    - 商品详细信息
+ 放大镜效果
    - 将鼠标移动至大图区域
    - 右侧处出现放大效果图
    - 通过鼠标移动在大图区域的移动
    - 控制放大镜盒子背景图片的移动范围
+ 添加商品数量文本框
    - 可通过手动输入所需商品数量
    - 也可以通过 '+' '-' 来增加或减少商品数量
+ 加入购物车
    - 点击加入购物车按钮
    - 可添加对应文本框的 该商品的数量
+ 点击  “去购物”
    - 可跳转 商品详情 页面



## cart.html 页面布局 和 功能的实现
+ 无商品
    - 可点击 现在去选购按钮, 进入 商品列表页面
+ 有商品
    - 点击选项框, 选择需要结算的商品
    - 点击'+' '-' 来增加或减少商品数量
    - 会计算出所有商品的数量, 及商品的价格
    - 点击 删除 按钮
    - 可删除该商品