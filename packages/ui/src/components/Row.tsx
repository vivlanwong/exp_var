import { customElement } from "solid-element";
import { PropsDefinitionInput } from "component-register";
interface RowElement {
    a: string
}

interface TableEvents {
    click1: Event
}
var Props: PropsDefinitionInput<RowElement> = {

    a: {
        value: "1",
        attribute: "a",
        notify: true,
        reflect: true,
        parse: true
    }
}

export type attrs = WebComponentAttributes<RowElement, TableEvents>

var component = customElement("x-row", Props, (props, { element }) => {
    return <div>{props.a}</div>
})

export { component }