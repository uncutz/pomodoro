export default class Dropdown
{
    constructor()
    {
        this.showItems();
    }

    showItems()
    {
        if (document.querySelector('.dropdown')) {
            const $elements = document.querySelectorAll('.dropdown');

            $elements.forEach($element => {
                $element.querySelector('.dropdown__button').addEventListener("click", () => {
                    const $list = $element.querySelector('.dropdown__item-list');
                    if($list.classList.contains('dropdown__item-list--show')) {
                        $list.classList.remove('dropdown__item-list--show')
                    } else {
                        $list.classList.add('dropdown__item-list--show')
                    }
                })
            })
        }
    }
}