const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const link = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    //linksCenter.classList.toggle('show-link');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = link.getBoundingClientRect().height;
    if(containerHeight===0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height=0;
    }
})

const navBar = document.getElementById('nav-center');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        navBar.classList.add('fixed-nav')
    }else{
        navBar.classList.remove('fixed-nav')
    }
    if(scrollHeight>500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})