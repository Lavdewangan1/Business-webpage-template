let burger = document.getElementById("burger");
let navBlock = document.getElementsByClassName('nav-stuff')[0];
burger.width = '30px';


burger.addEventListener("click",()=>{
    if( navBlock.style.display == 'none'){
        navBlock.style.display = 'block';
        burger.src = 'resources/icons/cross.png'
        
    }else{
        navBlock.style.display = 'none';
        burger.src = "resources/icons/burger.png";
    }
});



