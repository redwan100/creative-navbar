const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_link');
    const navLinks = document.querySelectorAll('.nav_link li');



    burger.addEventListener('click', () => {
        nav.classList.toggle('active')

         // add animation 
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksFade 0.3s ease forwards ${index / 5 + 1}s`
        }

    })
        
        // burger animation 
        burger.classList.toggle('toggle')
    })
   
}
 
navSlide()