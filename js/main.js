const swicthDarkLigth = document.querySelector('#themeToggle');
const mainContainer = document.querySelector('.main-container');
const texts = document.getElementsByClassName('text');

const socialLinks = document.querySelector('.social-links');

//Function to change the theme of the page

function changeTheme(event){
    event.preventDefault();

    if (event.target.checked) {
        mainContainer.setAttribute('style', 'background-color: var(--light-color)');
        for (let i = 0; i < texts.length; i++) {
            texts[i].setAttribute('style', 'color: var(--dark-color)');
        }

        socialLinks.setAttribute('style', 'background-color: #0c0c0ca6');

        
    } else {
        mainContainer.setAttribute('style', 'background-color: var(--dark-color)');
        for (let i = 0; i < texts.length; i++) {
            texts[i].setAttribute('style', 'color: var(--light-color)');
        }
    }

}

//Event listener to change the theme of the page
swicthDarkLigth.addEventListener('change', changeTheme );