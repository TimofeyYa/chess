'use strict'

window.addEventListener("DOMContentLoaded", ()=>{
    const pedgogs__sityName = document.querySelector('.pedgogs__sityName'),
    pedgogs__li = document.querySelectorAll('.pedgogs__sityAll li');

    const column = 3
    const pedgogs__blocks = document.querySelectorAll('.pedgogs__block');
    const allSity = document.querySelector('.pedgogs__blocks').dataset.cat.split(" ");
    
    const indexes = {};

    const pedgogs__arrowsItemRight = document.querySelector('.pedgogs__arrowsItemRight');
    const pedgogs__arrowsItemLeft = document.querySelector('.pedgogs__arrowsItemLeft');

    allSity.forEach(item =>{
        indexes[item] = 0;
    })
    console.log(indexes);

    

    pedgogs__sityName.innerHTML = pedgogs__li[0].innerHTML;
    pedgogs__li.forEach(item=>{
    item.addEventListener('click', ()=>{
        pedgogs__sityName.innerHTML = item.innerHTML;
        hiddenAll(pedgogs__blocks);
        selectItem(pedgogs__sityName.innerHTML, indexes[pedgogs__sityName.innerHTML], indexes[pedgogs__sityName.innerHTML] + column);
    })
    })

    hiddenAll(pedgogs__blocks);
    selectItem(pedgogs__sityName.innerHTML, indexes[pedgogs__sityName.innerHTML], indexes[pedgogs__sityName.innerHTML] + column);
    function hiddenAll(item){
        item.forEach(item =>{
            item.style.display = 'none';
        })
    }

    function selectItem(sity, start, end){
        console.log(sity);
        for(let i = start; i < end; i++){
            document.querySelectorAll(`.${sity}`)[i].style.display = 'block';
        }
    }


    pedgogs__arrowsItemRight.addEventListener("click", ()=>{

        if (indexes[pedgogs__sityName.innerHTML] < document.querySelectorAll(`.${pedgogs__sityName.innerHTML}`).length - 1){
        indexes[pedgogs__sityName.innerHTML]++;
        hiddenAll(pedgogs__blocks);
        selectItem(pedgogs__sityName.innerHTML, indexes[pedgogs__sityName.innerHTML], indexes[pedgogs__sityName.innerHTML] + column);
        }
    })
    pedgogs__arrowsItemLeft.addEventListener("click", ()=>{
        if (indexes[pedgogs__sityName.innerHTML] > 0){
            indexes[pedgogs__sityName.innerHTML]--;
            hiddenAll(pedgogs__blocks);
            selectItem(pedgogs__sityName.innerHTML, indexes[pedgogs__sityName.innerHTML], indexes[pedgogs__sityName.innerHTML] + column);
        }
    })
})