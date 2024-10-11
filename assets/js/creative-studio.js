/*!
=========================================================
* Creative Studio Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            // event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 



let up =document.querySelector("#up");
window.onscroll=function(){
    if (scrollY >= 500) {
        up.style.display="block"
    }else{
        up.style.display="none"

    }

}

up.onclick=function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}