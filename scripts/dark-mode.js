
checkDarkMode();


let darkToggle2 = document.getElementById('darkToggle')

darkToggle2.addEventListener('change', ()=>{
    document.body.classList.toggle('dark')
    
})
/**
 *  POR ENQUANTO 
 * 
 */
function checkDarkMode() {
    if (localStorage.darkMode) {
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }
}
if (darkToggle2.checked) {
    localStorage.darkMode = true
}
else{
    localStorage.darkMode = false
}