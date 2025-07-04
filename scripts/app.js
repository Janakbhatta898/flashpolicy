document.addEventListener('DOMContentLoaded', () => {
  const renderPlans = (plans) => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = plans.map(plan => `
      <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
        <div class="p-6">
          <div class="flex justify-between items-start">
            <img src="${plan.logo}" alt="${plan.insurer}" class="h-12">
            <span class="bg-primary text-white text-sm px-2 py-1 rounded">${plan.type.toUpperCase()}</span>
          </div>
          <h3 class="text-xl font-semibold mt-4">${plan.name}</h3>
          <div class="mt-2">
            <span class="text-2xl font-bold text-primary">₹${plan.price}</span>
            <span class="text-gray-500">/year</span>
          </div>
          <ul class="mt-4 space-y-2">
            ${plan.coverage.map(item => `<li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              ${item}
            </li>`).join('')}
          </ul>
          <button class="mt-6 w-full bg-primary hover:bg-dark text-white py-2 px-4 rounded transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    `).join('');
  };

  // Initial render
  renderPlans(insurancePlans);

  // Filter handlers
  document.getElementById('insurer-filter').addEventListener('change', filterPlans);
  document.getElementById('coverage-filter').addEventListener('change', filterPlans);
  document.getElementById('sort-by').addEventListener('change', filterPlans);
  document.getElementById('search').addEventListener('input', filterPlans);

  function filterPlans() {
    const insurer = document.getElementById('insurer-filter').value;
    const coverage = document.getElementById('coverage-filter').value;
    const sortBy = document.getElementById('sort-by').value;
    const searchTerm = document.getElementById('search').value.toLowerCase();

    let filtered = [...insurancePlans];

    // Apply filters
    if (insurer !== 'all') filtered = filtered.filter(plan => plan.insurer === insurer);
    if (coverage !== 'all') filtered = filtered.filter(plan => plan.type === coverage);
    if (searchTerm) filtered = filtered.filter(plan => 
      plan.name.toLowerCase().includes(searchTerm) ||
      plan.insurer.toLowerCase().includes(searchTerm)
    );

    // Apply sorting
    if (sortBy === 'low-high') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'high-low') filtered.sort((a, b) => b.price - a.price);

    renderPlans(filtered);
  }
});