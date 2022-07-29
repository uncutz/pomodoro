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

        const valid = this.isValid(sessionDuration, workingBlockLength, breakLength, videoLink);

        if(valid) {
            location.href =
                '/session?' +
                'sessionDuration=' +
                sessionDuration + '&' +
                'workingBlockLength=' +
                workingBlockLength + '&' +
                'breakLength=' +
                breakLength + '&' +
                'videoLink=' + videoLink;
        } else {
            alert('not valid input');
        }
    }

    isValid(sessionDuration, workingBlockLength, breakLength, videoLink) {

        let valid = true;
        if(!sessionDuration || sessionDuration === '' || sessionDuration === null) {
            valid = false;
        }
        if(!workingBlockLength || workingBlockLength === '' || workingBlockLength === null) {
            valid = false;
        }
        if(!breakLength || breakLength === '' || breakLength === null) {
            valid = false;
        }
        if(!videoLink || videoLink === '' || videoLink === null) {
            valid = false;
        }

        return valid;
    }
}