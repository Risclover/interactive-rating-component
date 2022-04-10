const beforeContent = document.querySelector('.before-content');
const afterContent = document.querySelector('.after-content');
const submitBtn = document.querySelector('.submit-btn');
const rateBtns = document.querySelectorAll('.rate-btn');
const rating = document.querySelector('.rating');

let activeRating = null;

rateBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        if(btn.focus()) {
            btn.classList.add('btn-focus');
        } 
        activeRating = e.target.textContent;
    })
})

submitBtn.addEventListener('click', function() {
    if(activeRating != null) {
        beforeContent.style.display = "none";
        afterContent.style.display = "block";
        rating.textContent = activeRating;
    }
})