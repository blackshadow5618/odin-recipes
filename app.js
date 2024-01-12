const darkBtn = document.getElementById("dark-btn");
const closeBtn = document.getElementById('close-btn');
const modalImg = document.querySelector('.modal-box .body #modal-box-img');
const title = document.querySelector('.header h3');

// Dark Mode 
function darkMode(){
    document.body.classList.toggle('dark-mode');
}
darkBtn.addEventListener('click', darkMode);

// Modal Box 
closeBtn.addEventListener('click', ()=> {
    document.querySelector('.modal-box').style.display = 'none';
});

const Images = document.querySelectorAll('img');
// console.log(Images);

Images.forEach((img)=> {
    console.log(img.alt);

    img.addEventListener('click', ()=>{
        // console.log(img.src);

        modalImg.src = img.src;
        title.textContent = img.alt;
        
        if(document.querySelector('.recipe-name + a img')){
            document.querySelector('.modal-box').style.display = 'none';
        }else{
            document.querySelector('.modal-box').style.display = 'flex';
        }
    })

})