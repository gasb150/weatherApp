
import loadPage from './modules/load';


loadPage.load();

const searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', () => {
  const cityInput = document.getElementById('cityInput').value;

  loadPage.load(cityInput);
});

const searchForm = document.getElementById('cityInput');
searchForm.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const cityInput = document.getElementById('cityInput').value;

    loadPage.load(cityInput);
  }
});
