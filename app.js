let features=document.getElementById('first');
let option1=features.parentElement.querySelector('ul');
let arrow=features.querySelector('img');

features.addEventListener('click', showFeatures);

function showFeatures(){
    if (arrow.classList.contains("rotate")) {
        option1.style.display='none';
        arrow.classList.remove("rotate");
    }
    else{
       option1.style.display='grid';
       arrow.classList.toggle('rotate');
    }
}

let company= document.getElementById('second');
let option2=company.parentElement.querySelector('ul');
let arrow2 = company.querySelector('img');

company.addEventListener('click',showCompany);

function showCompany(){
    if (arrow2.classList.contains("rotate")) {
        option2.style.display='none';
        arrow2.classList.remove("rotate");
    }
    else{
       option2.style.display='grid';
       arrow2.classList.toggle('rotate');
    }
}

let menu=document.querySelector('nav');
let closeButton=menu.querySelector('a').querySelector('img');
function showMenu(){
    menu.style.visibility='visible';
    closeButton.style.visibility=('visible');
}

function hideMenu(){
    menu.style.visibility='hidden';
    closeButton.style.visibility='hidden';
}