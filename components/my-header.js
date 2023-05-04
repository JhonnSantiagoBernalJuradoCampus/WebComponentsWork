import config from "../config.js";
export default class myHeader extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await(await fetch(config.uri(myHeader.url))).text();
    }

    constructor(){
        super();
        //El attachShadow lo reserva lo aisla
        this.attachShadow({mode: "open"});
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
        console.log("Etiqueta renderizada y configurada");
    }
}
myHeader.components()
customElements.define(config.name(myHeader.url), myHeader)