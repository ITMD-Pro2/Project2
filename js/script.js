
/* item page js stuff */

/* shipping button details */

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-shipping');
    const content = document.querySelector('.shipping-content');
  
    toggleBtn.addEventListener('click', () => {
      content.classList.toggle('hidden');
      toggleBtn.textContent = content.classList.contains('hidden') 
        ? 'Shipping & Delivery Info ▼' 
        : 'Shipping & Delivery Info ▲';
    });
  });
  
/* specs list button */

const specBtn = document.querySelector('.toggle-specs');
const specContent = document.querySelector('.spec-list');

specBtn.addEventListener('click', () => {
  specContent.classList.toggle('hidden');
  specBtn.textContent = specContent.classList.contains('hidden')
    ? 'View Full Specifications ▼'
    : 'Hide Specifications ▲';
});

/* seller desc button js */

const descBtn = document.querySelector('.toggle-description');
const descContent = document.querySelector('.description');

descBtn.addEventListener('click', () => {
  descContent.classList.toggle('hidden');
  descBtn.textContent = descContent.classList.contains('hidden')
    ? 'View Seller Description ▼'
    : 'Hide Seller Description ▲';
});

/* image switching for gallery */

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('mainimage');
  const thumbnails = document.querySelectorAll('.thumbnail img');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      mainImage.src = thumbnail.src;
    });
  });
});