const swicthDarkLigth = document.querySelector('#themeToggle');
const mainContainer = document.querySelector('.main-container');
const texts = document.getElementsByClassName('text');

//Function to change the theme of the page

function changeTheme(event){
    event.preventDefault();

    if (event.target.checked) {
        mainContainer.setAttribute('style', 'background-color: var(--light-color)');
        for (let i = 0; i < texts.length; i++) {
            texts[i].setAttribute('style', 'color: var(--dark-color)');
        }
    } else {
        mainContainer.setAttribute('style', 'background-color: var(--dark-color)');
        for (let i = 0; i < texts.length; i++) {
            texts[i].setAttribute('style', 'color: var(--lig    -color)');
        }
    }

}

//Event listener to change the theme of the page
swicthDarkLigth.addEventListener('change', changeTheme );