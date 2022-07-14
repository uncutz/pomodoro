import DataCollector from './js/DataCollector.js';
import "./SessionConfigMain.less"

export class SessionConfigMain
{
    collectData()
    {
        return new DataCollector();
    }
}