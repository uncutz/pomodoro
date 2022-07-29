import Timer from './js/Timer.js';
import './TimerMain.less';

export class TimerMain
{


    init(workTime, breakTime)
    {
        this.timer = new Timer(workTime, breakTime);
    }

    pauseOrStartTimer()
    {
        this.timer.pauseOrStartTimer();
    }
}
