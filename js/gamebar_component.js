class GameBar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="gamebar">
                <a href="/about.html" class="gamebar-button">test</a>
                <a href="/about.html" class="gamebar-button">test</a>
                <a href="/projects/zelda-dungeon-1.html" class="gamebar-button">
                    <img src="/assets/peek.png" alt="" class="gamebar-button-icon">
                    <p>Zelda Recreation</p>
                </a>
                <a href="/about.html" class="gamebar-button">test</a>
                <a href="/projects/breakfast-bus.html" class="gamebar-button">
                    <img src="/assets/bbus-images/bbus-icon.png" alt="" class="gamebar-button-icon">
                    <p>The Breakfast Bus</p>
                </a>
                <a href="/about.html" class="gamebar-button">test</a>
                <a href="/links.html" class="gamebar-button">test</a>
            </div>
        `;
        
        // color button for current page
        for (let elt of this.getElementsByClassName("gamebar-button")) {
            if (window.location.href == elt.href) {
                elt.style.backgroundColor = "#fff9f5";
                elt.style.color = "#ea935d";
                elt.style.borderTop = "2px solid #8e6b4e";
                elt.style.height = "48px";
            }
        }
    }

}

customElements.define("game-bar", GameBar);