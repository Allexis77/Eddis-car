let Btn = document.getElementById('modalBtn'),
    MobileBtn = document.getElementsByClassName('header-menu__btn-mobile')[0],
    Modal = document.getElementById('myModal-window'),
    Span = document.getElementsByClassName("close")[0],
    HeaderMenu = document.getElementsByClassName("header-menu")[0];

    Btn.addEventListener("click", function(){
        Modal.style.display = "block"
    });
    /* MobileBtn.addEventListener("click", function(){
        Modal.style.display = "block"
    }); */
    Span.addEventListener("click", function(){
        Modal.style.display = "none"
    });

new WOW().init();