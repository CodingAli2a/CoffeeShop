const themeToggleBtns = document.querySelectorAll('.theme-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('menu-toggler');
const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
const coverMobileMenu = document.getElementById('overlay');

themeToggleBtns.forEach(function(themeToggleBtn){

    themeToggleBtn.addEventListener('click', e=>{
        if(localStorage.theme === 'dark'){
            document.documentElement.classList.remove("dark")
            localStorage.theme = "light"
        }else{
             document.documentElement.classList.add("dark")
             localStorage.setItem("theme", "dark") 
        }
    })
})



const closeMobileMenu = ()=>{
    mobileMenu.classList.replace("right-0","-right-60")
    coverMobileMenu.classList.replace('visible', 'hidden') 
}
closeMobileMenuBtn.addEventListener('click', closeMobileMenu)
coverMobileMenu.addEventListener('click', closeMobileMenu)

mobileMenuBtn.addEventListener("click", e=>{
    mobileMenu.classList.replace("-right-60", "right-0")
    coverMobileMenu.classList.replace('hidden', 'visible') 
})