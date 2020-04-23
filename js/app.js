$(document).ready(function(){
$('#profile_ripple').ripples({
    resolution: 512,
    dropRadious:10,
    perturbance: 0.04
})

})




// stats

const counter  = document.querySelectorAll('.counter');
const speed = 200;

counter.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        // console.log(target);
        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target
        }
    }
    updateCount();

})


// image filter
// var $wrapper = $('.portfolio_wrapper');

// // initialize isotope

// $wrapper.isotope({
//     filter : '*',
//     layoutMode : 'masonry',
//     animationOptions : {
//         duration: 750,
//         easing: 'linear',
//     }
// });

// let links = document.querySelectorAll('.tabs a');


// links.forEach(link => {

//     let selector = link.dataset.filter;

//     link.addEventListener('click', function(e){
//         e.preventDefault();

//         $wrapper.isotope({
//             filter : '*',
//             layoutMode : 'masonry',
//             animationOptions : {
//             duration: 750,
//             easing: 'linear',
//             }
//         });

//         links.forEach(link => {
//             link.classList.remove('active')
//         })
//         e.target.classList.add('active');
//     })

//     // magnify pop up

//     $('.magnify').magnificPopup({
//         type: 'image',
//         gallery: {
//             enabled: true
//         },
//         zoom : {
//             enable: true
//         }
//     })
// })





