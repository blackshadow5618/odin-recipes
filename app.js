const darkBtn = document.getElementById("dark-btn");

function darkMode(){
    document.body.classList.toggle('dark-mode');
}

darkBtn.addEventListener('click', darkMode);