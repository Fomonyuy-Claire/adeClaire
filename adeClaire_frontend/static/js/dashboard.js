const firstSetCard = document.getElementById('first_set_card');
const secondSetCard = document.getElementById('second_set_card');
const nextBtn = document.getElementById('next_btn');
const backBtn = document.getElementById('back_btn');

// Set initial state
firstSetCard.classList.add('active');
secondSetCard.style.display = 'none'

nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    firstSetCard.classList.remove('active');
    firstSetCard.classList.add('exit-left'); // Slide out to the left
    setTimeout(() => {
        firstSetCard.style.display = 'none';
        firstSetCard.classList.remove('exit-left');

        secondSetCard.style.display = 'flex';
        secondSetCard.classList.add('active'); // Slide in
    }, 500); // Match transition duration
});

backBtn.addEventListener('click', function (e) {
    e.preventDefault();
    secondSetCard.classList.remove('active');
    secondSetCard.classList.add('exit-right'); // Slide out to the right
    setTimeout(() => {
        secondSetCard.style.display = 'none';
        secondSetCard.classList.remove('exit-right');

        firstSetCard.style.display = 'flex';
        firstSetCard.classList.add('active'); // Slide in
    }, 500); // Match transition duration
});
