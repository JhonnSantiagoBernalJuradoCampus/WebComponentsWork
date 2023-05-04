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
        
    }
    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined
    }
    enviarWorker(e){
        console.log(`El ${this.myBtn.value} ha sido tocado`);
    }
    connectedCallback(){
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.myBtn = this.shadowRoot.querySelector(".btn")
            this.myBtn.addEventListener("click", this.handleEvent.bind(this))
        })
        console.log("Etiqueta renderizada y configurada");
    }
}
customElements.define(config.name(myHeader.url), myHeader)