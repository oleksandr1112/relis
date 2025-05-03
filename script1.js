let btn_buy1 = document.querySelector('.btn_buy1')
btn_buy1.addEventListener('click', function(){
    btn_buy1.style.background = 'white';
    btn_buy1.style.color = '#9AA6B2';
    btn_buy1.style.border = '5px solid #9AA6B2';
    btn_buy1.innerHTML = 'ДОДАНО У КОШИК';
    btn_buy1.style.pointerEvents = 'none';
})