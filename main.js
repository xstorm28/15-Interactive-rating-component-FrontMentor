let numberContainer = document.querySelector('.rating-state_NumberContainer')
let rateNumber = document.querySelector('.thanks-state_result--number')
let submitBtn = document.querySelector('.rating-state_button')
let rating = document.querySelector('.rating-state')
let thanks = document.querySelector('.thanks-state')

numberContainer.addEventListener('click', e =>{
    const numberSelected = e.target.innerText
    rateNumber.innerText = numberSelected
    console.log(numberSelected);
    if (numberSelected > 0 || numberSelected <= 5){
        submitBtn.addEventListener('click', ()=>{
            rating.style.display = 'none'
            thanks.style.display = 'flex'
        })
    }
} )

