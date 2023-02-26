/* Variables */
let navBarLinks = document.querySelectorAll('nav ul li'); 
let user = document.querySelector('#user');
let shopCart = document.querySelector('#cart');
// mobile menu
let mobileMenuIcon = document.querySelector('.MobileMenuIcon');
let menuMobile =  document.querySelector('.menuMobile');

// Popular Dishes
let filterMenu = document.querySelectorAll(".filtermenu div");
let loading = document.querySelector('.loading');


user.addEventListener('click', () => {
    user.querySelector('.userprofile').classList.toggle('hidden')
})
shopCart.addEventListener('click', () => {
    shopCart.querySelector('.producstOnCart').classList.toggle('hidden')
})
mobileMenuIcon.addEventListener('click', () => {
    
    if (menuMobile.classList.contains('left-0')) {
        menuMobile.classList.replace('left-0', "-left-1/2")
    }else if (menuMobile.classList.contains('-left-1/2')) {
        menuMobile.classList.replace('-left-1/2', "left-0")
    }
    menuMobile.querySelector('.closeIcon').addEventListener('click', () => {
        menuMobile.classList.replace("left-0", '-left-1/2')
    })
})

document.addEventListener("click", (e) => {
    if (!user.contains(e.target)) {
        user.querySelector('.userprofile').classList.add('hidden')
    }
    if (!shopCart.contains(e.target)) {
        shopCart.querySelector('.producstOnCart').classList.add('hidden')
    }
    if (!menuMobile.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
        menuMobile.classList.replace("left-0", '-left-1/2')
    }
})
// get yellow color to name page on navbar
navBarLinks.forEach((li) => {
    let myPathname = location.pathname;
    
        if (myPathname === '/'){
            if (li.classList.contains('home')) {

                li.classList.add('active');
            }
        }else {
            let myLiClass = myPathname.replaceAll('/', '')
            if (li.classList.contains(`${myLiClass}`)) {
                console.log(myLiClass);
                li.classList.add('active');
            }

        }
})

//Fetching data using fetch

filterMenu.forEach((div) => {
    
        div.addEventListener("click", () => {
            filterMenu.forEach((div) => {
                div.firstElementChild.classList.replace('bg-yellow-400', "bg-white");
                div.firstElementChild.classList.add('border-2');
                // console.log(div.firstElementChild);
            })
            div.firstElementChild.classList.replace("bg-white", 'bg-yellow-400');
            div.firstElementChild.classList.remove('border-2');
            let myChose = div.dataset.dishes;
            document.querySelector('.popular .boxes').innerHTML = '';
        loading.classList.add('show');
        fetch(`/filterDishes/${myChose}`).then(res=>res.json())
        .then((data) => {
            loading.classList.remove('show');
            
            data.forEach(value => {
                document.querySelector('.popular .boxes').innerHTML += `<div class="box rounded-lg border overflow-hidden p-3">
                <div class="backward-color w-full relative"><img src="/${value.urlPhoto }" class="mx-auto rounded-lg" alt=""></div>
                <p class="fond-bold text-xl mt-5">${value.name }</p>
                <p class="my-2 text-slate-400 h-9 overflow-hidden" title="${value.description }">${value.description }</p>
                <div class="flex justify-between items-center text-yellow-400 text-3xl font-bold p-2 pt-5"><span class="pricePopular">${value.price } DH</span><i class="las la-shopping-basket bg-yellow-400 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i></div>
                </div>`
            })
        }).catch(() => {
            loading.classList.remove('show');
            document.querySelector('.popular .boxes').innerHTML = 'no data fetched!';
        })
        // .then((data) => document.querySelector('.popular .boxes').innerHTML = ``)
    })
})

// slides of clients
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 3000
    },
    direction: 'horizontal',
    loop: true,
    centreSlide: 'true',
    fade: 'true',
    // slidesPerView: 5,
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints : {
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 15,
        }
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.la-chevron-circle-right',
        prevEl: '.la-chevron-circle-left',
    }
});