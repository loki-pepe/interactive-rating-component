const form = document.querySelector('form');
const ratingCard = document.querySelector('.card#rating');
const thanksCard = document.querySelector('.card#thanks');
const ratingField = document.querySelector('#selected-rating');

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', handleSubmit);
})

function handleSubmit(event) {
    event.preventDefault();
    const rating = Object.fromEntries(new FormData(event.target)).rating;
    if (rating) {
        ratingField.textContent = rating;
        ratingCard.setAttribute('hidden', '');
        thanksCard.removeAttribute('hidden');
    }
}