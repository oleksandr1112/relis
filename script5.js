let btn_end = document.querySelector('.btn_end')
let contaner = document.querySelector('.contaner')
function end_buy(){
    btn_end.style.background = 'white';
    btn_end.style.color = '#9AA6B2';
    btn_end.style.border = '5px solid #9AA6B2';
    btn_end.innerHTML = 'КОШИК ПУСТИЙ';
    btn_end.style.pointerEvents = 'none';

}
if(contaner.innerHTML == ''){
    
    end_buy()
}
let number = document.querySelectorAll('.number')
let minus = document.querySelectorAll('.minus')
let plus = document.querySelectorAll('.plus')
for( let i = 0; i < plus.length; i += 1) {
    plus[i].addEventListener('click', function(){
        number[i].value = +number[i].value + 1;
    })
    minus[i].addEventListener('click', function(){
        if( number[i].value >= 2){
            number[i].value = +number[i].value - 1;
        }
    })
}


let contaner_goods_list = document.querySelectorAll('.contaner_goods')
let delete_list = document.querySelectorAll('.delete')
// for(let i = 0; i < contaner_goods_list.length; i += 1){
//     delete_list[i].addEventListener('click', function(){
//         contaner_goods_list[i].style.display = 'none'
//     })
// }
delete_list.forEach(function(delete_btn){
    delete_btn.addEventListener('click', function(){
        
        const closest = delete_btn.closest('.contaner_goods')
        closest.remove();
        let contaner = document.querySelector('.contaner')
        // console.log(document.querySelector('.contaner_goods'));
        if( document.querySelector('.contaner_goods') == null){
            end_buy()
        }

    })
})
// end_buy()