import config from "../config.js";
export default class myNav extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await(await fetch(config.uri(myNav.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined
    }
    enviarWorker(e){
        console.log(`El ${this.myBtn.value} ha sido tocado`);
    }
    connectedCallback(){
        Promise.resolve(myNav.components()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.myBtn = this.shadowRoot.querySelector(".btn")
            this.myBtn.addEventListener("click", this.handleEvent.bind(this))
        })
        console.log("Etiqueta renderizada y configurada");
    }
}
customElements.define(config.name(myNav.url), myNav)