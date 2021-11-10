'use strict'

window.addEventListener("DOMContentLoaded", ()=>{

    // работаем с хеадером 

    const header = document.querySelector('.header');

    window.addEventListener('scroll', ()=>{

        if (window.scrollY > 100){
            header.classList.add('header__mini');
        } else {
            header.classList.remove('header__mini');
        }
    })

    // плавная прокрутка хеадера 
    const navLists = {
        "header": document.querySelectorAll('.header__navList li'),
        "footer": document.querySelectorAll('.footer__nav p')
    }

    console.log(navLists['header'][1].dataset.target);

    function scrollSelector(arr){
        arr.forEach(item => {
            item.addEventListener('click', ()=>{
                let id = item.dataset.target; 
                console.log(document.querySelector(`#${id}`).offsetTop);

                window.scroll({
                    top: document.querySelector(`#${id}`).offsetTop - 150,
                    behavior: 'smooth'
                })
            })
        });
    }

    scrollSelector(navLists['header']);
    scrollSelector(navLists['footer']);

    document.querySelector('.header__logo img').addEventListener('click', ()=>{
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    })



    // Работа с попапом

    // Заполняем селек
    const select = document.querySelector('.district__selector');
    let dataDist = fetch('../district.json').then(response=>{
        return response.json();
    }) .then((data) => {

        data.forEach(item =>{
            let block = document.createElement('option');
            block.innerHTML = item;
            select.append(block);
        })
      });
    
    const popForm = document.querySelector('#popForm'),
          popup__exit = document.querySelectorAll('.popup__exit'),
          goForm = document.querySelectorAll('.goForm');

    popup__exit.forEach(item =>{
        item.addEventListener('click', ()=>{
            item.parentElement.parentElement.style.display = 'none';
        })
    })

    goForm.forEach(item =>{
        item.addEventListener('click', ()=>{
            popForm.style.display = 'flex';
        })
    })
    

    // Проверка на вертикальность 

    const foto__block = document.querySelectorAll('.foto__block img');
    
    foto__block.forEach(item =>{
        if (item.clientWidth - 50 > item.clientHeight){
            item.parentElement.classList.remove('foto__blockVertical');
            item.parentElement.classList.add('foto__blockHorizontal');
        }
    })
})