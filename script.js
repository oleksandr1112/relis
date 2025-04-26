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