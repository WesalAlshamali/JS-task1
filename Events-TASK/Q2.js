document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('countrySelect');
    const flagImg = document.getElementById('flag');

    const countryFlags = {
       
        fr: 'https://flagcdn.com/fr.svg',
        de: 'https://flagcdn.com/de.svg'
        
    };

    countrySelect.addEventListener('change', function() {
        const selectedCountry = countrySelect.value;
        if (selectedCountry && countryFlags[selectedCountry]) {
            flagImg.src = countryFlags[selectedCountry];
            flagImg.style.display = 'block';
        } else {
            flagImg.style.display = 'none';
        }
    });
});
