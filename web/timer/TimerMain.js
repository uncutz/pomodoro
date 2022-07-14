import Timer from './js/Timer.js';
import "./TimerMain.less";

export class TimerMain
{

    initTimer(newTime)
    {
        new Timer(newTime);
    }
}
