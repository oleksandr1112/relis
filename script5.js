let number = document.querySelectorAll('.number')
let minus = document.querySelectorAll('.minus')
let plus = document.querySelectorAll('.plus')
for( let i = 0; i < 5; i += 1) {
    plus[i].addEventListener('click', function(){
        number[i].innerHTML += 1;
    })
    minus[i].addEventListener('click', function(){
        if( number[i] != 1){
            number[i].innerHTML -= 1;
        }
    })
}
let contaner_goods_list = document.querySelectoraAll('contaner_goods')
let delete_list = document.querySelectoraAll('delete')
for(let i = 0; i < 5; i += 1){
    delete_list[i].addEventListener('click', function(){
        contaner_goods_list[i].style.display = 'none'
    })
}