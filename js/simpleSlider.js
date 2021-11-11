'use strict'

window.addEventListener("DOMContentLoaded", ()=>{
    const column = 3;
    const merop__block = document.querySelectorAll('.merop__block');
    const merop__arrowsRight = document.querySelector('.merop__arrowsRight');
    const merop__arrowsLeft = document.querySelector('.merop__arrowsLeft');

    const foto__block = document.querySelectorAll('.foto__block');
    const foto__arrowsRight = document.querySelector('.foto__arrowsRight');
    const foto__arrowsItemLeft = document.querySelector('.foto__arrowsItemLeft');

    const smi__block = document.querySelectorAll('.smi__block');
    const smi__arrowsRight = document.querySelector('.smi__arrowsRight');
    const smi__arrowsLeft = document.querySelector('.smi__arrowsLeft');
    

    function startSlide(arrLeft,arrRight,item){
        let index = 0;

        function hiddenAll(item){
            item.forEach(element => {
                element.style.display = 'none';
            });
        }
        hiddenAll(item);

        function showIt(start, item){
            for(let i = start; i < start + column; i++){
                item[i].style.display = 'block';
            }
        }

        showIt(index, item);

        arrRight.addEventListener('click', ()=>{
            if (index < item.length - column ){
            index++;
            hiddenAll(item);
            showIt(index, item);
            }
        })
        arrLeft.addEventListener('click', ()=>{
            if (index > 0){
                 index--;
                 hiddenAll(item);
                 showIt(index, item);
            }
           
        })
    }

    startSlide(merop__arrowsLeft,merop__arrowsRight,merop__block);
    startSlide(smi__arrowsLeft,smi__arrowsRight,smi__block);
    startSlide(foto__arrowsItemLeft,foto__arrowsRight,foto__block);
})