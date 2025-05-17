let main = document.querySelector('main')
let contaner = document.querySelector('.contaner')

if( contaner.innerHTML != ''){
    main.inneHTML += `<button class="btn_end btn" >ОФОРМИТИ ЗАМОВЛЕННЯ</button>`
    
}
if(contaner.innerHTML == ''){
    let btn_end = document.querySelector('.btn_end')
    btn_end.style.display ='none'
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
        closest.style.display = 'none'

    })
})
