/* Desenvolva sua lógica aqui ... */

function darkMode() {
    const html = document.querySelector("html");
    const darkModeButton = document.querySelector(".dark_mode");
    const themeIcon = document.querySelector(".icon");
    
    darkModeButton.addEventListener("click", () => {
        html.classList.toggle("dark-mode");

        if(html.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", true);

            themeIcon.src = "./src/assets/img/sun-icon.svg";

        } else {
            localStorage.setItem("darkMode", false);

            themeIcon.src = "./src/assets/img/moon-icon.svg";
        }
    });
    
    const storedTheme = localStorage.getItem("darkMode");

    if(storedTheme === "true") {
        html.classList.add("dark-mode");

        themeIcon.src = "./src/assets/img/sun-icon.svg";

    }else if(storedTheme === "false") {
        html.classList.remove("dark-mode");

        themeIcon.src = "./src/assets/img/moon-icon.svg";
    }

}
darkMode();