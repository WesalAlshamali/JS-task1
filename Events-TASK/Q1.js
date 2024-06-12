document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('hoverText');

    textElement.addEventListener('mouseover', function() {
        textElement.style.backgroundColor = 'yellow';
        textElement.style.fontWeight = 'bold';
    });

    textElement.addEventListener('mouseout', function() {
        textElement.style.backgroundColor = '';
        textElement.style.fontWeight = '';
    });
});
