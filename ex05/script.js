// capura o elemento select
const countrySelect = document.getElementById('countrySelect')

// event listener para detectar a mudança da seleção
countrySelect.addEventListener('change', function() {
    const selectedCountr = countrySelect.value;
    if (selectedCountry !== 'default') {
        console.log("país selecionad: ", selectedCountr);
    }
});