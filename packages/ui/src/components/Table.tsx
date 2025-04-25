import { customElement } from "solid-element";
import { PropsDefinitionInput } from "component-register";
import { createEffect, For, onMount } from "solid-js";

interface TableElement {
    heads?: Array<string>;
    rows?: Array<Array<string>>;
}

interface TableEvents {
    click1: Event
}

var Props: PropsDefinitionInput<TableElement> = {
    heads:[],
    rows:[]
}
var el_name = "x-table"
var component = customElement(el_name, Props, (props, { element }) => {
    console.log(props)

    // var slot:HTMLSlotElement 
    onMount(() => {
        // slot.addEventListener("slotchange",function(e){
        //     let nodes = slot.assignedNodes();
        //     nodes.forEach((item)=>{
        //         var el=item as HTMLElement
        //         createEffect(()=>{
        //             el.setAttribute("a",props.a)
        //             // el.props=props
        //         })
        //         // // if("setAttribute" in  item ){
        //         //     item.setAttribute("b","1")
        //         // }

        //     })
        //     console.log(
        //       `Element in Slot "${slot.name}" changed to "${slot.outerHTML}".`,
        //     );
        // })
    })
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <For each={props.heads} fallback={<div>Loading...</div>}>
                            {(item) => <td>{item}</td>}
                        </For>

                    </tr>
                    <For each={props.rows} fallback={<div>Loading...</div>}>
                        {(item) => <x-row style={{display:"table-row"}} class="row" data={item}></x-row>}
                    </For>


                </tbody>
            </table>
            {/* <button onclick={() => {
                if ("dispatchEvent" in element) {
                    element.dispatchEvent(new Event("click1"))

                }

            }}>aaa</button>
            <slot ref={(it)=>{slot=it}} name="a" ></slot>
            <div>{props.a}</div> */}
        </>
    )
})

export type attrs = WebComponentAttributes<TableElement, TableEvents>

export { component }