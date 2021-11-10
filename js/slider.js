'use strict'

window.addEventListener("DOMContentLoaded", ()=>{
    const pedgogs__sityName = document.querySelector('.pedgogs__sityName'),
          pedgogs__li = document.querySelectorAll('.pedgogs__sityAll li');

    const column = 3;
    
    
    pedgogs__sityName.innerHTML = pedgogs__li[0].innerHTML;
    pedgogs__li.forEach(item=>{
        
        item.addEventListener('click', ()=>{
            pedgogs__sityName.innerHTML = item.innerHTML;
            hiddenAll('pedgogs__block');
            setTimeout(()=>{
                createSlider(1, 'pedgogs__block', pedgogs__sityName.innerHTML, 1, 1);
            }, 300)
            
            
        })
    })


    function createSlider(wrapper, blocksName, selector ,arrLeft, arrRight){
        let index = 0;
        const block = document.querySelectorAll(`.${blocksName}`);
        let selectorName ;

        if (selector){
             selectorName = document.querySelectorAll(`.${selector}`);
           
        } else {
             selectorName = block;
        }

        function hiddenIt(block){
            block.forEach(item=>{
                item.style.display = 'none';
            })
        }
        hiddenIt(block);

        block.forEach(el => {
            el.classList.add('startAnimate');
        });


        function showIt(arr){
            setTimeout(()=>{
                let count = 0;
                for(let i = index; i < index + column; i++){
                    arr[i].style.display = 'block';
                    setTimeout(()=>{
                    arr[i].classList.add('endAnimate');
                    }, count*250+100);
                    count++;
                }

            }, 200)
        }

        showIt(selectorName);
        
        


        const arrRight1 = document.querySelector('.pedgogs__arrowsItemRight');

        arrRight1.addEventListener('click', ()=>{
            index = index + column;
            hiddenAll('pedgogs__block');
            showIt(selectorName);
        })
    }

    function hiddenAll(blocksName){
        const block = document.querySelectorAll(`.${blocksName}`);
        let promise = new Promise((resolve, reject) => {
        block.forEach(el => {
            el.classList.remove('endAnimate');
            setTimeout(() => {
                resolve("result");
              }, 600);
        })
        }).then(result=>{
            result.forEach(item=>{
                item.style.display = 'none';
            })
        })

    }

    createSlider(1, 'pedgogs__block','Заринск', 1, 1);
    
})