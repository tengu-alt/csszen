window.addEventListener('load', searcher);
let mainInput = document.querySelector('.selector')
let searchButton = document.querySelector('.selector-find')
let nextBtn = document.querySelector('.selector-next')
let prevBtn = document.querySelector('.selector-prev')
let parentBtn = document.querySelector('.nav-top')
let childBtn = document.querySelector('.nav-bottom')
let prevSib = document.querySelector('.nav-left')
let nextSib = document.querySelector('.nav-right')
function searcher(){
    
    searchButton.addEventListener('click', function(){
    let selected =  document.querySelector(`.${mainInput.value}`)
    nextBtn.addEventListener('click', function(){nextSelector(selected)})
    prevBtn.addEventListener('click', function(){prevtSelector(selected)})
    setLight(selected)
    if(selected.parentElement.nextElementSibling){
        nextBtn.disabled = false
    }
    if(selected.parentElement.previousElementSibling){
        prevBtn.disabled = false
    }
    
     
})
}
function setLight(e){
    e.style.backgroundColor = 'lightblue'
    e.style.outline = 'solid red 5px' 
}
function removeLight(e){
    e.style.backgroundColor = null
    e.style.outline = null 
}
function nextSelector(e){
    removeLight(e)
    e = e.parentElement.nextElementSibling
    setLight(e)
    if(!e.parentElement.nextElementSibling){
        nextBtn.disabled = true
    }
    searcher()
    }
function prevtSelector(e){
    removeLight(e)
    e = e.parentElement.previousElementSibling
    setLight(e)
    if(!e.parentElement.previousElementSibling){
        prevBtn.disabled = true
    }
    searcher()
}