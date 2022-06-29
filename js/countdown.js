(function(){

    const startTime = new Date();
    let opacity = 1;

    function countdown() {
        opacity -= 0.1;
        document.body.style.color = `rgba(0,0,0,${opacity})`;
        // const currentTime = new Date();
        // const pastTimeSecs =  (currentTime - startTime) / 1000;
        // if (pastTimeSecs > 5) {
        //     document.body.innerHTML = 'Заплатіть за розробку сайту';
        // }
    }

    setInterval(countdown, 1000);

})();

