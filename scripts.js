// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Fetch data.json and populate dashboard
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const docsContainer = document.getElementById('docs-container');
    data.docs.forEach(doc => {
      docsContainer.innerHTML += `
        <div class="bg-white p-4 rounded shadow card">
          <img src="assets/doc-icon.svg" class="h-8 w-8 mb-2" alt="Doc Icon">
          <h3 class="font-bold text-lg">${doc.title}</h3>
          <p class="text-gray-700">${doc.description}</p>
          <a href="${doc.link}" class="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
        </div>
      `;
    });

    const gamesContainer = document.getElementById('games-container');
    data.games.forEach(game => {
      gamesContainer.innerHTML += `
        <div class="bg-white p-4 rounded shadow card">
          <img src="assets/game-icon.svg" class="h-8 w-8 mb-2" alt="Game Icon">
          <h3 class="font-bold text-lg">${game.name}</h3>
          <p class="text-gray-700">${game.description}</p>
          <a href="${game.link}" class="text-blue-600 hover:underline mt-2 inline-block">Play</a>
        </div>
      `;
    });

    const expContainer = document.getElementById('experience-container');
    data.experience.forEach(exp => {
      expContainer.innerHTML += `
        <div class="bg-white p-4 rounded shadow card flex items-start space-x-4">
          <img src="assets/exp-icon.svg" class="h-8 w-8 mt-1" alt="Experience Icon">
          <div>
            <h3 class="font-bold">${exp.title} <span class="text-gray-500 text-sm">(${exp.date})</span></h3>
            <p class="text-gray-700">${exp.description}</p>
          </div>
        </div>
      `;
    });
  });
