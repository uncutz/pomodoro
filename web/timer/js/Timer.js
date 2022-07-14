export default class Timer
{
    constructor(newTime)
    {
        this.isPaused = false;

        const time = new Date().setTime(new Date().getTime() + (parseInt(newTime) * 60 * 1000));
        this.initTimer(time);
    }

    initTimer(time)
    {
        const intervalId = setInterval(function () {
            if (!this.isPaused) {
                let now      = new Date().getTime();
                let timeLeft = time - now;

                let hours   = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                console.log(hours, minutes, seconds);

                hours   = hours.toLocaleString('en-Us', {minimumIntegerDigits: 2});
                minutes = minutes.toLocaleString('en-Us', {minimumIntegerDigits: 2});
                seconds = seconds.toLocaleString('en-Us', {minimumIntegerDigits: 2});

                if (parseInt(hours + minutes + seconds) <= 0) {
                    clearInterval(intervalId);
                }

                if (document.querySelector('.timer__number')) {
                    /*
                    document.querySelector('.timer__number')
                            .setAttribute('data-interval-id', intervalId);
                     */
                    document.querySelector('.timer__number')
                            .setAttribute('data-time-left', `${hours}:${minutes}:${seconds}`);
                }

                const $element                                     = document.createElement('h1');
                $element.innerText                                 = `${hours}:${minutes}:${seconds}`;
                document.querySelector('.timer__number').innerHTML = '';
                document.querySelector('.timer__number').append($element);
            }

        }, 1000);
    }

    pauseOrStartTimer()
    {
        this.isPaused = !this.isPaused;
    }
}