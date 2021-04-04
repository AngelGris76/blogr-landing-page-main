const mainMenu = document.getElementById('main-menu');
const menuContainer = document.getElementById('menu-container');
const subMenus = document.getElementsByClassName('main-submenu');

const isSubMenu = (element) =>
{
    if ((element.tagName === 'A') && (element.nextElementSibling.tagName === 'UL')) return true;
    else
        return false;
}

const hideSubMenus = () =>
{
    for (const subMenu of subMenus) 
    {
        subMenu.classList.add('hide-submenu')
        subMenu.previousElementSibling.classList.remove('main-menu__link--expanded')
    }
}

const isHide = (subMenu) =>
{
    if (subMenu.nextElementSibling.classList.contains('hide-submenu')) return true;
    else
        return false;
}

mainMenu.addEventListener('click', (e) =>
{
    if (e.target.tagName === 'NAV') e.target.children[0].classList.toggle('menu-container--show');
    if (isSubMenu(e.target))
    {
        let hideState = isHide(e.target);
        hideSubMenus();

        if (hideState === true)
        {
            e.target.nextElementSibling.classList.remove('hide-submenu');
            e.target.classList.add('main-menu__link--expanded')
        }
    }
});

menuContainer.addEventListener('transitionend', (e) =>
{
    e.target.parentElement.classList.toggle('main-menu--show');
    e.target.parentElement.parentElement.parentElement.classList.toggle('intro--show');
    if (!mainMenu.classList.contains('main-menu-show'))
    {
        hideSubMenus();   
    }
});