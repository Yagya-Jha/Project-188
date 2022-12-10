AFRAME.registerComponent("elemental",{
    schema: {
        kind: {type: 'string', default: 'fire'}
    },
    init: function(){
        let t=document.querySelector("#txt");
        const { kind }=this.el.getAttribute("elemental");
        this.el.addEventListener("mouseenter", () => {
            t.setAttribute("text",{value:kind})
            console.log(t.getAttribute("text").value);
        });
        this.el.addEventListener("mouseleave", ()=>{
            t.setAttribute("text",{value:' '})
        } )
    }
});