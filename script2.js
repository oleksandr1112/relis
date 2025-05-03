let btn_buy2 = document.querySelector('.btn_buy2')
btn_buy2.addEventListener('click', function(){
    btn_buy2.style.background = 'white';
    btn_buy2.style.color = '#9AA6B2';
    btn_buy2.style.border = '5px solid #9AA6B2';
    btn_buy2.innerHTML = 'ДОДАНО У КОШИК';
    btn_buy2.style.pointerEvents = 'none';

})