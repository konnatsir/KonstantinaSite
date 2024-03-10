const info_1 = document.querySelector('.info-1');
const info_2 = document.querySelector('.info-2');
const img_1 = document.querySelector('.image-1');
const img_2 = document.querySelector('.image-2');
img_1.classList.remove('left-right');
img_2.classList.remove('right-left');
info_1.classList.remove('right-left');
info_2.classList.remove('left-right');





const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            img_1.classList.add('left-right');
            img_2.classList.add('right-left');
            info_1.classList.add('right-left');
            info_2.classList.add('left-right');
            return;
        }
    })
})


observer.observe(document.querySelector('.internal'));



