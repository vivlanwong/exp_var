import { customElement } from "solid-element";
import {For} from "solid-js"
import { PropsDefinitionInput, register } from "component-register";
interface RowElement {
    data?: Array<string>
}

interface TableEvents {
    click1: Event
}
var Props: PropsDefinitionInput<RowElement> = {

    data: {
        value: [],
        attribute: "data",
        notify: true,
        reflect: true,
        parse: true
    }
}

export type attrs = WebComponentAttributes<RowElement, TableEvents>

var component = customElement("x-row", Props,  (props, { element }) => {
    return (
        <> 
        {<style  >
        
            :host{
                `display:table-row;` 
            }  
        </style>
}
        <For each={props.data} fallback={<div>Loading...</div>}>
                                    {(item) => <td>{item}</td>}
                                </For> 
        </>
    )
})

export { component }