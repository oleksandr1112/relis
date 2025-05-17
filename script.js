let arrow = document.querySelector('.banner_arrow')
function arrow_btn(){
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
arrow.addEventListener('click', arrow_btn)
let send_btn = document.querySelector('.send')
send_btn.addEventListener('click', function(){
    let text = document.querySelector('.your_coment_text').value
    if (text != ''){
        let coments_all = document.querySelector('.coments1')
        coments_all.innerHTML += `
        <div class="comentator1">
            <p class="com_text1">${text}</p>
        </div>
        `
        document.querySelector('.your_coment_text').value = ''
    }
})

// class Goods {
//     constructor(name, spice, img){
//         this.name = name
//         this.spice = spice
//         this.img = img

//     }
// }
// let goods1 = new Goods ('ДИВАН', '100грн', 'goods1.png' )
// let goods2 = new Goods ("М'ЯКЕ КРІСЛО ", '100грн', 'goods2.png' )
// let goods3 = new Goods ("М'ЯКЕ КРІСЛО", '100грн', 'goods3.png' )
// let goods4 = new Goods ('ДИВАН', '100грн', 'goods4.png' )
// let btn_buy1 = document.querySelector('.btn_buy1')
// console.log(bt);
// let btn_buy2 = document.querySelector('.btn_buy2')
// let btn_buy3 = document.querySelector('.btn_buy3')
// let btn_buy4 = document.querySelector('.btn_buy4')
// btn_buy1.addEventListener('click', function(){
//     btn_buy1.style.background = 'white'
//     btn_buy1.style.color = '#9AA6B2'
//     btn_buy1.style.border = '1px solid #9AA6B2'
//     btn_buy1.innerHTML = 'ДОДАНО У КОШИК'
// })