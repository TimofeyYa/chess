'use strict'

window.addEventListener("DOMContentLoaded", ()=>{
    const faq__block = document.querySelectorAll('.faq__block'),
          faq__blockTop = document.querySelectorAll('.faq__blockTop');

    faq__blockTop.forEach(item =>{
        item.parentElement.style.height = item.clientHeight + 'px';
    })
    faq__blockTop.forEach(item =>{
        let flag = true;
        item.addEventListener('click', ()=>{
            if (flag){
                item.parentElement.style.height = item.clientHeight +
                item.parentElement.querySelector('.faq__blockBottom').clientHeight  + 'px';
                item.querySelector('.faq__blockBtn').classList.add('faq__blockBtn--active');
                
            } else {
                item.parentElement.style.height = item.clientHeight + 'px';
                item.querySelector('.faq__blockBtn').classList.remove('faq__blockBtn--active');
            }
            flag = !flag;
        })
    })
})