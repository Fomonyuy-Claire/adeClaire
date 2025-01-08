const first_set_card = document.getElementById('first_set_card')
const second_set_card = document.getElementById('second_set_card')
const next_btn = document.getElementById('next_btn')
const back_btn = document.getElementById('back_btn')

second_set_card.style.display = 'none'

next_btn.addEventListener('click', function(e){
    e.preventDefault()
    first_set_card.style.display = 'none'
    second_set_card.style.display = 'flex'
})

back_btn.addEventListener('click', function(e){
    e.preventDefault()
    second_set_card.style.display = 'none'
    first_set_card.style.display = 'flex'
})