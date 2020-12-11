//导航栏下拉菜单
const uls = document.querySelectorAll('.uls > li')
const hide = document.querySelector('.banner-hide')
console.log(uls)
console.log(hide)
for(var i = 0; i < uls.length;i++){
    uls[i].addEventListener('mouseover' , function () {
        hide.style.display = "flex"
    })
    uls[i].addEventListener('mouseout', function () {
        hide.style.display = 'none'
    })
}
//底部分栏
const grow = document.querySelectorAll('.tips')
const lis = document.querySelector('.about-left')
for(var i = 0; i < grow.length;i++){
    grow[i].addEventListener('onclick' , function () {
        lis.style.display = 'flex'
    })
    grow[i].addEventListener('onclick', function () {
        lis.style.display = 'none'
    })
}
//搜索引擎
const list = document.querySelector('.list')
const inp = document.querySelector('input')
inp.addEventListener('input',function(){
    const value = this.value.trim()
    if(!value) {
        list.classList.remove('active')
        return
    }
    
    const script = document.createElement('script')
    const url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1446,32857,33124,33061,32973,33099,33101,32962,22159&wd=${value}&req=2&csor=1&cb=bindHtml&_=1605768936993`
    script.src = url
    document.body.appendChild(script)
    script.remove()
})
function bindHtml(res){
    if(!res.g){
        list.classList.remove('active')
        return
    }
    let str = ''
    for(let i = 0;i < res.g.length;i++){
        str += `
        <li>${ res.g[i].q }</li>
        `
    }
    $('.list > ul').html(str)
     list.classList.add('active')
}
//点击跳转
const zh = document.querySelector('#zh')
const shop = document.querySelector('#shop')
zh.addEventListener('click',() => {
    window.location.href = './login.html'

})
shop.addEventListener('click',() => {
    window.location.href = './cart.html'
})
