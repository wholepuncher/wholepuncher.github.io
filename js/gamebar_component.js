class GameBar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="gamebar">
                <a href="/projects/thelongroad.html" class="gamebar-button">
                    <img src="/assets/longroad-images/icon.png" alt="" class="gamebar-button-icon">
                    <p>The Long Road</p>
                </a>
                <a href="/projects/thingsontopofthings.html" class="gamebar-button">
                    <img src="/assets/things-images/icon.png" alt="" class="gamebar-button-icon">
                    <p>Things on Top of Things</p>
                </a>
                <a href="/projects/zelda-dungeon-1.html" class="gamebar-button">
                    <img src="/assets/zelda-images/icon.png" alt="" class="gamebar-button-icon">
                    <p>Zelda Recreation</p>
                </a>
                <a href="/projects/supershoppers.html" class="gamebar-button">
                    <img src="/assets/sshop-images/icon.png" alt="" class="gamebar-button-icon">
                    <p>Super Shoppers</p>
                </a>
                <a href="/projects/breakfast-bus.html" class="gamebar-button">
                    <img src="/assets/bbus-images/bbus-icon.png" alt="" class="gamebar-button-icon">
                    <p>The Breakfast Bus</p>
                </a>
                <a href="/projects/daggershigh.html" class="gamebar-button">
                    <img src="/assets/daggershigh-images/icon.png" alt="" class="gamebar-button-icon">
                    <p>Daggers High</p>
                </a>
                <a href="/projects/gloriousascendency.html" class="gamebar-button">
                    <img src="/assets/gloriousasc-images/icon.png" alt="" class="gamebar-button-icon">
                    <p>Glorious Ascendency</p>
                </a>
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