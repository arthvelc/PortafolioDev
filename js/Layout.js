const navbar = document.getElementById('nav');

function addNavbarBody(){
    navbar.insertAdjacentHTML('beforeend',

        `
        <div class="nav-container">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">Projects</a>
            <a class="nav-link" href="#">About me</a>
            <a class="nav-link" href="#">Contact</a>
        </div>

        <div class = "nav-container">
            <div class="nav-container">
                <p>Español</p>
    
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div> 
    
            <div class="nav-container">
                <label for="themeToggle" class="themeToggle st-sunMoonThemeToggleBtn" type="checkbox">
                    <input type="checkbox" id="themeToggle" class="themeToggleInput" />
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" stroke="none">
                        <mask id="moon-mask">
                            <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                            <circle cx="11" cy="3" r="8" fill="black"></circle>
                        </mask>
                        <circle class="sunMoon" cx="10" cy="10" r="8" mask="url(#moon-mask)"></circle>
                        <g>
                            <circle class="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
                            <circle class="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
                            <circle class="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
                            <circle class="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
                            <circle class="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
                            <circle class="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
                        </g>
                    </svg>
                </label>
            </div>
        </div>
        `
    )
}

addNavbarBody();

