import config from "../config.js";
export default class mySelection extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await(await fetch(config.uri(mySelection.url))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(mySelection.components()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
        console.log("Etiqueta renderizada y configurada");
    }
}
mySelection.components()
customElements.define(config.name(mySelection.url), mySelection)