(function() {
    const clockContainer = document.querySelector('.clock');

    function updateClock() {
        clockContainer.innerText = new Date().toLocaleTimeString([], { hour12: false });
    }
    
    setInterval(updateClock, 1000);
})();




