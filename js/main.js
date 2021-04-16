//Якоря

$("body").on('click', '[href*="#"]', function(e){
    let fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});


function displayModal (id, bool) {
    let modal = document.getElementById(id)

    let body = document.getElementById('app')


    if (bool !== 'none') {

        setTimeout(() => {
            modal.style.opacity = '1'
        }, 0)

        body.style.filter = 'blur(2px)'
        modal.style.display = bool
    } else {
        modal.style.opacity = '0'
        body.style.filter = 'none'

        setTimeout(() => {
            modal.style.display = bool
        }, 300)
    }
}


// Burger menu

let burgerOn = false
let burger = document.getElementById('burger')
let mask = document.getElementById('burger-mask')

function burgerMenu () {
    burgerOn = !burgerOn

    if (burgerOn) {
        mask.style.display = 'block'
        burger.classList.add('header-burger__cross')
        setTimeout(() => {
            mask.style.opacity = '1'
        }, 0)
    } else {
        mask.style.opacity = '0'
        burger.classList.remove('header-burger__cross')
        setTimeout(() => {
            mask.style.display = 'none'
        }, 100)
    }
}
