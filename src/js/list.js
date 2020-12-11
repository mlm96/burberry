$('.suibian')
.siblings()
.click(function(){
    /*  console.log('123')  */
    console.log($(this).html())
    $.post('./server/getList.php',`key=${$(this).html()}`,null,'json')
    .then(res =>{
        console.log(res.code)
        if(res.code == 1){
        bindHtml(res)
        }
    })
})
const ul = document.querySelector('.suibianla')
console.log(ul)
function bindHtml(key){
    console.log(key.list)
    let str = ''
    for(let i = 0; i < key.list.length; i++) {
        str += `
        <div>
        <li  data-id= "${ key.list[i].goods_id }">
            <img src= ${key.list[i].goods_small_logo}>
            <span>${key.list[i].goods_name}</span>
            <span>￥${ key.list[i].goods_price }</span>
            <p>
              <a href="./cart.html" class="btn btn-danger addCart" role="button" >加入购物车</a>
              <a href="./cart.html" class="btn btn-warning" role="button">去结算</a>
            </p>
        </li>
        </div>
        `
    }
    ul.innerHTML = str

    $('.suibianla').on('click', 'li', function(){
        console.log('我点击了 ')
        const id = $(this).data('id')
        setCookie('goods_id', id)
        window.location.href = "./detail.html"
    })
}
