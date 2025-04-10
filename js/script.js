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
  