let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");
export default class myHeader extends HTMLElement{
    static async components(){
      return await(await fetch(pathName.replace(".js", ".html"))).text();
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
customElements.define("my-header", myHeader)