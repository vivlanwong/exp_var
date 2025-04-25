import { customElement } from "solid-element";
import { PropsDefinitionInput } from "component-register";
import { createEffect, onMount } from "solid-js";

interface TableElement {
    a: string
}

interface TableEvents {
    click1: Event
}

var Props: PropsDefinitionInput<TableElement> = {

    a: {
        value: "1",
        attribute: "a",
        notify: true,
        reflect: true,
        parse: true
    }
}
var el_name = "x-table"
var component = customElement(el_name, Props, (props, { element }) => {
    console.log(element.onclick1)

    var slot:HTMLSlotElement 
    onMount(() => {
        slot.addEventListener("slotchange",function(e){
            let nodes = slot.assignedNodes();
            nodes.forEach((item)=>{
                var el=item as HTMLElement
                createEffect(()=>{
                    el.setAttribute("a",props.a)
                    // el.props=props
                })
                // // if("setAttribute" in  item ){
                //     item.setAttribute("b","1")
                // }
                    
            })
            console.log(
              `Element in Slot "${slot.name}" changed to "${slot.outerHTML}".`,
            );
        })
    })
    return (
        <>
            <button onclick={() => {
                if ("dispatchEvent" in element) {
                    element.dispatchEvent(new Event("click1"))

                }

            }}>aaa</button>
            <slot ref={(it)=>{slot=it}} name="a" ></slot>
            <div>{props.a}</div>
        </>
    )
})

export type attrs = WebComponentAttributes<TableElement, TableEvents>

export { component }