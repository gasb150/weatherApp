
import loadPage from './modules/load';


loadPage.load();

const searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', () => {
  const cityInput = document.getElementById('cityInput').value;

  loadPage.load(cityInput);
});
