import Timer from './js/Timer.js';
import "./TimerMain.less";

export class TimerMain
{


    init(newTime)
    {
        this.timer = new Timer(newTime);
    }

    pauseOrStartTimer () {
        this.timer.pauseOrStartTimer()
    }
}
