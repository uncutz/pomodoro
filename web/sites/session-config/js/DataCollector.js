export default class DataCollector
{
    constructor()
    {
        this.collect();
    }

    collect()
    {
        const sessionDuration    = document.querySelector('#session-duration').value;
        const workingBlockLength = document.querySelector('#working-block-length').value;
        const breakLength        = document.querySelector('#break-length').value;
        const videoLink          = document.querySelector('#youtube-link').value;

        location.href =
            '/session?' +
            'sessionDuration=' +
            sessionDuration + '&' +
            'workingBlockLength=' +
            workingBlockLength + '&' +
            'breakLength=' +
            breakLength + '&' +
            'videoLink=' + videoLink;
    }
}