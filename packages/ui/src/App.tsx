import { createSignal, For, type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web'; 


 


function interpret(code:string, ctx:any){
  return new Function('global', `with(global){return ${code}}`).call(ctx, ctx);
}

const ctx:any = { a: 1, b: 2, c: { d: 3 },rgb:function(){
  return 1
} };

interpret(`a + c.d`, ctx); // 4

const RedDiv = () => <div style="color: red">Red</div>
const GreenDiv = () => <div style="color: green">Green</div>
const BlueDiv = () => <div style="color: blue">Blue</div>

 type ss={count:Number,name:string}

 const Counter2:Component<ss>=(props:ss)=>{
  const count1 = () => props.count
  const name = () => props.name
    return (<div>{name()}:{ count1().toString()}</div> ) // Accessing the count prop and displaying it in a div element.
}

const Counter:Component<ss>=(props:ss)=>{
  const count1 = () => props.count
  const name = () => props.name
  console.log("Counter")
    return (
    <>
      <div>{name()}:{ count1().toString()}</div>
      <Counter2 name='count2' count={count1()}></Counter2>
    </>
   ) // Accessing the count prop and displaying it in a div element.
} 
const App: Component = () => {
  var [count, setCount] = createSignal(0) 
  ctx.count=count
  var i=0
  setInterval(function () {
    setCount(i++)
  },1000)
  // const obj = { eval,x:1,y:2 };
  // with(obj){

    // obj.eval("x + y");
  // }
  // var s=  createMemo(() => {
    
  //   return interpret("count()+rgb()",ctx)
  // })

  const [selected, setSelected] = createSignal("red")
  const options :any= {
    red: RedDiv,
    green: GreenDiv,
    blue: BlueDiv,
  } 
  
  return (
    <>
 <x-table a={count().toString()} on:click1={(e)=>{
  console.log("click1")
 }}>
  <x-row slot="a" a="0"></x-row> 

 </x-table>

 <Counter count={count()} name='aaa' ></Counter>

    <select slot='' on:c={(a:InputEvent)=>{a}}

      value={selected()}
      onInput={(e) => setSelected(e.currentTarget.value)}
    >
      <For each={Object.keys(options)}>
        {(color) => <option value={color}>{color}</option>}
      </For>
    </select>
    <slot name='aa'></slot>
    <Dynamic component={options[selected()]} />
  </>
  );
};



export default App;
