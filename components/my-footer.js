import config from "../config.js";
export default class myFooter extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await(await fetch(config.uri(myFooter.url))).text();
    }

    constructor(){
        super();
        //El attachShadow lo reserva lo aisla
        this.attachShadow({mode: "open"});
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
        console.log("Etiqueta renderizada y configurada");
    }
}
customElements.define(config.name(myFooter.url), myFooter)