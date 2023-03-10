class NavBar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="navbar">
                <a href="/" class="navbar-button">Home</a>
                <a href="/projects/" class="navbar-button">Projects</a>
                <a href="/about.html" class="navbar-button">About</a>
                <a href="/links.html" class="navbar-button">Links</a>
                <div class="navbar-contact">
                    <p style="margin-top: 5px">
                        Email me at:
                        wholepuncher1@gmail.com
                    </p>
                </div>
            </div>
        `;
        
        // color button for current page
        for (let elt of this.getElementsByClassName("navbar-button")) {
            if (window.location.href == elt.href) {
                elt.style.backgroundColor = "#fff9f5";
                elt.style.color = "#ea935d";
                elt.style.borderTop = "2px solid #8e6b4e";
                elt.style.borderBottom = "2px solid #fff9f5";
            }
        }
    }

}

customElements.define("navigation-bar", NavBar);