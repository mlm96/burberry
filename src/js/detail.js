// jQuery 的入口函数
$(function () {

    // 0. 提前准备一个变量拿出来商品信息
    let info = null
  
    // 1. 拿到 cookie 中的 goods_id 属性
    const id = getCookie('goods_id')
    console.log(id)
  
    // 2. 根据 id 信息去请求商品数据
    getGoodsInfo()
    async function getGoodsInfo() {
      const goodsInfo = await $.get('./server/getGoodsInfo.php', { goods_id: id }, null, 'json')
      // 3. 进行页面的渲染
      bindHtml(goodsInfo.info)
      
        
      // 给提前准备好的变量进行赋值
      info = goodsInfo.info
    }
  
    function bindHtml(info) {
      console.log(info)
  
      // 1. 渲染左边放大镜位置
      $('.enlargeBox').html(`
        <div class="show">
          <img src="${ info.goods_big_logo }" alt="">
          <div class="mask">

            </div>
            <div class="bigBox" style="background-image: url(${ info.goods_big_logo })">

            </div>
        </div>
        <div class="list">
          <p class="active">
            <img src="${ info.goods_small_logo }" alt="">
          </p>
        </div>
      `)
  
      // 2. 商品详细信息渲染
      $('.goodsInfo').html(`
        <p class="desc">${ info.goods_name }</p>
        <div class="btn-group size">
          <button type="button" class="btn btn-default">S</button>
          <button type="button" class="btn btn-default">M</button>
          <button type="button" class="btn btn-default">L</button>
          <button type="button" class="btn btn-default">XL</button>
        </div>
        <p class="price">
          ￥ <span class="text-danger">${ info.goods_price }</span>
        </p>
        <div class="num">
          <button class="subNum">-</button>
          <input type="text" value="1" class="cartNum">
          <button class="addNum">+</button>
        </div>
        <div>
          <button class="btn btn-success addCart">加入购物车</button>
          <button class="btn btn-warning continue"><a href="./list.html">继续去购物</a></button>
        </div>
      `)
      new Fang('.enlargeBox')
  
      // 3. 商品参数渲染
      $('.goodsDesc').html(info.goods_introduce)
    }
  
    // 4. 加入购物车的操作
    $('.goodsInfo').on('click', '.addCart', function () {
      
      const cart = JSON.parse(window.localStorage.getItem('cart')) || []
  
      
      const flag = cart.some(item => item.goods_id === id)
      // 如果没有, 那么我就 push 进去
      if (flag) {
        
        const cart_goods = cart.filter(item => item.goods_id === id)[0]
        cart_goods.cart_number = cart_goods.cart_number - 0 + ($('.cartNum').val() - 0)
      } else {
        info.cart_number = 1
        // 表示没有
        cart.push(info)
      }
  
      // 4-5. 添加完毕还要存储到 localStorage 里面
      window.localStorage.setItem('cart', JSON.stringify(cart))
    })
  
    // 5. ++ -- 的事件
    $('.goodsInfo')
      .on('click', '.subNum', function () {
        // 拿到 input 的 value 值
        let num = $('.cartNum').val() - 0
        // 进行判断, 如果当前是 1, 那么什么都不做
        if (num === 1) return
        // 否则就进行 -- 操作, 然后在设置回去
        $('.cartNum').val(num - 1)
      })
      .on('click', '.addNum', function () {
        // 拿到 input 的 value 值
        let num = $('.cartNum').val() - 0
        // 否则就进行 -- 操作, 然后在设置回去
        $('.cartNum').val(num + 1)
      })
  })
  class Fang {
    constructor (ele) {
        // 获取元素
        this.ele = document.querySelector(ele)
        console.log(this.ele)
        // 获取img盒子
        this.imgBox = this.ele.querySelector('.show')
        // console.log(this.imgBox)
        // 获取mask
        this.mask = this.ele.querySelector('.mask')
        // console.log(this.mask)
        // 获取min盒子
        // this.minBox = this.ele.querySelector('.min')
        // console.log(this.minBox)
        // 获取daBox
        this.big= this.ele.querySelector('.bigBox')
        // console.log(this.big)
        // 获取图片盒子大小
        this.imgBox_width = this.imgBox.clientWidth
        this.imgBox_height = this.imgBox.clientHeight
        // console.log(this.imgBox_width)
        // console.log(this.imgBox_height)
        // 获取背景图大小
        this.big_width = parseInt(window.getComputedStyle(this.big).width)
        console.log(this.big_width)
        this.big_height = parseInt(window.getComputedStyle(this.big).height)
        // console.log(this.big_height)
        // 获取背景图大小
        this.bg_sizeX = parseInt(window.getComputedStyle(this.big).backgroundSize.split(' ')[0])
        console.log(this.bg_sizeX)
        this.bg_sizeY = parseInt(window.getComputedStyle(this.big).backgroundSize.split(' ')[1])
        console.log(this.bg_sizeY)
  
        this.mask_width = this.imgBox_width * this.big_width / this.bg_sizeX
        // console.log(this.mask_width)
        this.mask_height = this.imgBox_height * this.big_height / this.bg_sizeY
        // console.log(this.mask_height)
        // 执行
        this.init()
        this.overOut()
        this.move()
        // this.qie()
    }
    // 入口
    init(){
        this.maskDA()
    }
    // 调整mask的大小
    maskDA(){
        this.mask_width = this.imgBox_width * this.big_width / this.bg_sizeX
        // console.log(this.mask_width)
        this.mask_height = this.imgBox_height * this.big_height / this.bg_sizeY
        // console.log(this.mask_height)
        // 进行复制
        this.mask.style.width = this.mask_width + 'px'
        this.mask.style.height = this.mask_height + 'px'
        // console.log(this.mask.style.height)
    }
  
    // 移入移出
    overOut() {
        this.imgBox.addEventListener('mouseover',() => {
            console.log(11)
            this.mask.style.display = 'block'
            this.big.style.display = 'block'
        })
        this.imgBox.addEventListener('mouseout',() => {
            this.mask.style.display = 'none'
            this.big.style.display = 'none'
        })
    }
  
    // 移动
    move(){
        this.imgBox.addEventListener('mousemove' , e => {
            e = e || window.event 
            // 获取坐标
            console.log(e, this.mask_width )
            let x = e.offsetX - this.mask_width / 2
            let y = e.offsetY - this.mask_height / 2
            // 判断条件 不让出街
            if(x <= 0)x = 0
            if(y <= 0)y = 0
            if(x >= this.imgBox_width - this.mask_width) x = this.imgBox_width - this.mask_width
            if(y >= this.imgBox_width - this.mask_width) y = this.imgBox_width - this.mask_width
            // 进行复制
            this.mask.style.left = x + 'px'
            this.mask.style.top =  y + 'px'
            // 背景图盒子的尺寸 * 移动距离 / 遮罩盒子的尺寸 = 背景图移动的尺寸
            let bg_width = this.imgBox_width * x / this.mask_width
            let bg_height = this.imgBox_height * y / this.mask_height
            // 赋值
            this.big.style.backgroundPosition = `-${bg_width}px   -${bg_height}px`
        })
    }
  }
  