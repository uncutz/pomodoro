export default class Timer
{
    constructor(newTime = 5 * 60 * 1000)
    {
        const time = new Date().setTime(new Date().getTime() + newTime);
        this.initTimer(time);
    }

    initTimer(time)
    {
        const intervalId = setInterval(function () {
            let now      = new Date().getTime();
            let timeLeft = time - now;

            let hours   = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            console.log(hours, minutes, seconds);

            if(hours + minutes + seconds === 0) {
                clearInterval(intervalId)
            }
        }, 1000);
    }
}