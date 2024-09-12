const themeToggleBtn = document.querySelector('#theme-toggle')
themeToggleBtn.addEventListener('click', e=>{
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.remove("dark")
        localStorage.theme = "light"
    }else{
         document.documentElement.classList.add("dark")
         localStorage.setItem("theme", "dark")
    }
})