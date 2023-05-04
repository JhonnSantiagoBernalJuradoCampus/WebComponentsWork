import config from "../config.js";
export default class mySelection extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await(await fetch(config.uri(mySelection.url))).text();
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
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(mySelection.components()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.myBtn = this.shadowRoot.querySelector(".btn")
            this.myBtn.addEventListener("click", this.handleEvent.bind(this))
        })
        console.log("Etiqueta renderizada y configurada");
    }
}
mySelection.components()
customElements.define(config.name(mySelection.url), mySelection)