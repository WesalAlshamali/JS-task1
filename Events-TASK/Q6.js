
document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementById('colorBox');
    const animationDuration = 5000; 

   
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    function animateColorChange(duration) {
        let startTime;
        let endTime;

        function changeColor(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = elapsed / duration;
            if (progress < 1) {
                box.style.backgroundColor = getRandomColor();
                requestAnimationFrame(changeColor);
            } else {
                box.style.backgroundColor = getRandomColor();
            }
        }

        requestAnimationFrame(changeColor);
    }

    animateColorChange(animationDuration);


    setInterval(() => {
        animateColorChange(animationDuration);
    }, animationDuration);
});
