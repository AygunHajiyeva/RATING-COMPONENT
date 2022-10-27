const submitButton = document.getElementById("submit-button");
const rateSection = document.querySelector(".rate-section");
const thankYouSection = document.querySelector(".thank-you-section");
const ratingBtn = document.querySelectorAll(".rating-btn");
const score = document.getElementById("score");



ratingBtn.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});


function handleRatingBtnClick(event) {
    submitButton.addEventListener("click", () => {
        rateSection.style.display = "none";
        thankYouSection.style.display = "block";
    })
    
    ratingBtn.forEach(btn => {
        btn.classList.remove('active');
    });

    if(event.target.classList.contains('rating-btn')){
        event.target.classList.add('active')
        console.log(event.target.textContent)
        score.innerHTML = event.target.textContent
    }
}