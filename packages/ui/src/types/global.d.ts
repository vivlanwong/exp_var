import { JSX } from "solid-js";
import {attrs as Table,el_name} from "../components/Table";
import {attrs as Row,el_name} from "../components/Row";

declare global{
    type WebComponentElementEvents<E> = { [Key in keyof E as `on:${Key}`] : (event: E[Key]) => void };

    type Children={ children: Element|undefined }

    type WebComponentAttributes<T, E> = Partial<T & JSX.HTMLAttributes<T>  & WebComponentElementEvents<E>>;
    
}

declare module "solid-js"  {
  namespace JSX {
    interface CustomEvents{
        a:JSX.InputEvent
        b:JSX.InputEvent
        c:JSX.InputEvent
    }
    interface IntrinsicElements {
        "x-table":Table
        "x-row":Row
    }
  }
} 