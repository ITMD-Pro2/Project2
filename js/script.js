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
  
const specBtn = document.querySelector('.toggle-specs');
const specContent = document.querySelector('.spec-list');

specBtn.addEventListener('click', () => {
  specContent.classList.toggle('hidden');
  specBtn.textContent = specContent.classList.contains('hidden')
    ? 'View Full Specifications ▼'
    : 'Hide Specifications ▲';
});
