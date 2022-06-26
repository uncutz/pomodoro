import Timer from './components/Timer.js';
import "./../css/main.less"

export class Main {

    initMain() {
        console.log('main')
    }

    initTimer() {
        new Timer();
    }
}