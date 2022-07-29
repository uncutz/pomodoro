export default class Timer
{
    constructor(workTime, breakTime)
    {
        this.workPhase = true;
        this.isPaused  = true;
        this.initTimer(workTime, breakTime);
        console.log(workTime);
        console.log(breakTime);
    }

    initTimer(workTime, breakTime)
    {
        let time         = new Date().setTime(new Date().getTime() + (parseInt(workTime) * 60 * 1000));
        let timeLeft;
        const intervalId = setInterval(() => {
            let now = new Date().getTime();
            if (!this.isPaused) {
                timeLeft = time - now;
            } else {
                time += 1000; //add seconds if paused to counterweight the current time (now)
                timeLeft = time - now;
            }

            let hours   = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            console.log(hours, minutes, seconds);

            hours   = hours.toLocaleString('en-Us', {minimumIntegerDigits: 2});
            minutes = minutes.toLocaleString('en-Us', {minimumIntegerDigits: 2});
            seconds = seconds.toLocaleString('en-Us', {minimumIntegerDigits: 2});

            if (parseInt(hours + minutes + seconds) <= 0) {
                clearInterval(intervalId);
                this.workPhase = !this.workPhase;
                if (this.workPhase) {
                    this.initTimer(workTime, breakTime);
                }
                if (!this.workPhase) {
                    this.initTimer(breakTime, breakTime);
                }
            }

            if (document.querySelector('.timer__number')) {
                document.querySelector('.timer__number')
                        .setAttribute('data-time-left', `${hours}:${minutes}:${seconds}`);
            }

            const $element                                     = document.createElement('h1');
            $element.innerText                                 = `${hours}:${minutes}:${seconds}`;
            document.querySelector('.timer__number').innerHTML = '';
            document.querySelector('.timer__number').append($element);


        }, 1000);

    }

    pauseOrStartTimer()
    {
        this.isPaused = !this.isPaused;
    }
}