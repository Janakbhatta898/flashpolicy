document.addEventListener('DOMContentLoaded', () => {
  const plansContainer = document.getElementById('insurance-plans');
  
  insurancePlans.forEach(plan => {
    const planCard = document.createElement('div');
    planCard.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow';
    planCard.innerHTML = `
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <img src="${plan.logo}" alt="${plan.name}" class="h-10">
          <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">${plan.savings}</span>
        </div>
        <h3 class="text-xl font-semibold mb-2">${plan.name}</h3>
        <div class="flex items-center mb-4">
          <div class="flex text-yellow-400 mr-2">
            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(plan.rating))}
          </div>
          <span class="text-gray-600">${plan.rating}/5</span>
        </div>
        <div class="mb-6">
          <span class="text-3xl font-bold text-primary">₹${plan.price}</span>
          <span class="text-gray-500">/year</span>
        </div>
        <ul class="space-y-2 mb-6">
          ${plan.features.map(feature => `
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              ${feature}
            </li>
          `).join('')}
        </ul>
        <button class="w-full bg-primary hover:bg-dark text-white py-3 rounded-lg font-semibold transition-colors">
          BUY NOW
        </button>
      </div>
    `;
    plansContainer.appendChild(planCard);
  });
});