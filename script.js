const gunting=document.querySelector(".menu .gunting img")
const batu=document.querySelector(".menu .batu img")
const kertas=document.querySelector(".menu .kertas img")
const parent=document.querySelector('.hasil')
const pilihanSana=document.querySelector('.pilihanSana img')
const captionPilihanSana=document.querySelector('.pilihanSana figcaption')

gunting.addEventListener('click',function(){
    let suwit=['gunting','batu','kertas']
    let sanaTwice=suwit[Math.floor(Math.random()*((suwit.length-1)-0+1))+0]
    if(sanaTwice=='batu'){
        parent.innerHTML=`Kamu kalah!`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }else if(sanaTwice=='kertas'){
        parent.innerHTML=`Yeay! Kamu menang`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }else{
        parent.innerHTML=`kalian seri,ulangi lagi wkwkwk`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }
})

batu.addEventListener('click',function(){
    let suwit=['gunting','batu','kertas']
    let sanaTwice=suwit[Math.floor(Math.random()*((suwit.length-1)-0+1))+0]
    if(sanaTwice=='kertas'){
        parent.innerHTML=`Kamu kalah!`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }else if(sanaTwice=='gunting'){
        parent.innerHTML=`Yeay! Kamu menang`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }else{
        parent.innerHTML=`kalian seri,ulangi lagi wkwkwk`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }
})

kertas.addEventListener('click',function(){
    let suwit=['gunting','batu','kertas']
    let sanaTwice=suwit[Math.floor(Math.random()*((suwit.length-1)-0+1))+0]
    if(sanaTwice=='gunting'){
        parent.innerHTML=`Kamu kalah!`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }else if(sanaTwice=='batu'){
        parent.innerHTML=`Yeay! Kamu menang`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }else{
        parent.innerHTML=`kalian seri,ulangi lagi wkwkwk`
        pilihanSana.setAttribute('src',`image/${sanaTwice}.svg`)
        captionPilihanSana.innerHTML=sanaTwice
    }
})
