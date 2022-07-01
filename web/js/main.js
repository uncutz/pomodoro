import Timer from './components/Timer.js';
import './../css/main.less';

export class Main
{

    initMain()
    {
    }

    initTimer()
    {
        new Timer();
    }
}

const $navbar = document.querySelector('.navbar');
if ($navbar) {
    window.onscroll = function () {
        //addPseudoElement($navbar);
        addFixed();
    };
}

function addFixed()
{
    const navbarOffset = $navbar.offsetTop + $navbar.offsetHeight;
    if (window.scrollY >= navbarOffset) {
        $navbar.classList.add('fixed-top');
    } else {
        $navbar.classList.remove('fixed-top');
    }
}

function addPseudoElement(element)
{
    if (document.querySelector('.pseudoElement')) {
        document.querySelector('.pseudoElement').remove();
    }
    const $pseudoElement     = document.createElement('div');
    $pseudoElement.innerHTML = `<div class="pseudoElement" style="height: ${element.offsetHeight} "><p style="visibility: hidden">.</p></div>`;
    element.after($pseudoElement.firstChild);

}