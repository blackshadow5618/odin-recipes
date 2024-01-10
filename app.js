const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");

function darkMode(){
    document.body.classList.toggle('dark-mode');
}

lightBtn.addEventListener('click', darkMode);
darkBtn.addEventListener('click', darkMode);