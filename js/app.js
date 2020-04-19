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
        console.log(target);
        const inc = target / speed;
        
        

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target
        }

        // console.log(inc);
        // console.log(count);
    }
    updateCount();

    // $('.stats').hover(function(){
    //   const a = 0
    //   let b = document.querySelectorAll('.counter').innerText = a;
    //   console.log(b)

    //   if(b = '0'){
    //     updateCount();
    //   }

    // })

})

