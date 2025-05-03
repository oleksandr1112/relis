let btn_buy4 = document.querySelector('.btn_buy4')
btn_buy4.addEventListener('click', function(){
    btn_buy4.style.background = 'white';
    btn_buy4.style.color = '#9AA6B2';
    btn_buy4.style.border = '5px solid #9AA6B2';
    btn_buy4.innerHTML = 'ДОДАНО У КОШИК';
    btn_buy4.style.pointerEvents = 'none';

})