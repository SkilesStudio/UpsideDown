
//This is what keeps navbar at the top of screen after scrolling past the landing page
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight) {
            document.getElementById('mainNavbar').classList.add('fixed-top');
            // add padding top to show content behind navbar
            // navbar_height = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('mainNavbar').classList.remove('fixed-top');
            // remove padding top from body
            // document.body.style.paddingTop = '0';
        } 
    });
}); 