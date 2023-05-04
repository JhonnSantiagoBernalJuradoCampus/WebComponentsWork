import config from "../config.js";
export default class myNav extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await(await fetch(config.uri(myNav.url))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(myNav.components()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
        console.log("Etiqueta renderizada y configurada");
    }
}
customElements.define(config.name(myNav.url), myNav)