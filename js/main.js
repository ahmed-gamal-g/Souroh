let nums = document.querySelectorAll(".box-num-all .num");
let sectionNum = document.querySelector(".section-num");
 let started = false // function started ? no


window.onscroll = function () {
    if (window.scrollY >= sectionNum.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 0.5);
}


startCount(document.querySelectorAll(".box-num-all .num"))
