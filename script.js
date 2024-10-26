const sideMenu = doocument.querySelector('#sideMenu');

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navar.classlist.add('bg-white','bg-opacity-50', 'backdrop-blur-1g','shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20'); 
        navLinks.classList.remove('bg-white', 'shadow-sm','shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-white/70', "dark:bg-transparent");
    }
    else{
        navar.classlist.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-1g','shadow-sm');
        navlinks.classlist.add('bg-white', 'shadow-sm','shadow-sm', 'bg-opacity-50');
    }
})

//-——-light mode and dark mode------



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(' (prefers-color-scheme: dark)').matches)) {
        document.documentElement.classlist.add('dark')
    } 
    else {
        document.documentElement.classlist.remove('dark')
    }
    function toggleTheme(){
        if(document.documentElement.classList.contains('dark')){
            localStorage.theme = 'dark';
        }
        else{
            localstorage.theme = 'light';
        }
    }