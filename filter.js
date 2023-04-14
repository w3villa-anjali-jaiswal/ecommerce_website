// ===================filter button handle======================
let tggl = document.getElementById('range_tggl')
let max_input = document.getElementById('max')
let minus = document.querySelectorAll('h2')
let price_cnt = document.querySelectorAll('#price_content')




tggl.addEventListener("input", () => {
    max_input.value = tggl.value;
}
);

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        minusfunc(i)
    })
}

function minusfunc(i) {
    if (price_cnt[i].style.display === "none") {
        price_cnt[i].style.display = 'block'
        minus[i].innerHTML = '-';
    }
    else {
        price_cnt[i].style.display = 'none'
        minus[i].innerHTML = '+';
    }
};




