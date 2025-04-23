import {createComputed, createMemo, createSignal, type Component } from 'solid-js';


function interpret(code:string, ctx:any){
  return new Function('global', `with(global){return ${code}}`).call(ctx, ctx);
}

const ctx:any = { a: 1, b: 2, c: { d: 3 },rgb:function(){
  return 1
} };

interpret(`a + c.d`, ctx); // 4

const App: Component = () => {
  var [count, setCount] = createSignal(0) 
  ctx.count=count
  // setInterval(function () {
  //   setCount(i++)
  // })
  // const obj = { eval,x:1,y:2 };
  // with(obj){

    // obj.eval("x + y");
  // }
  var s=  createMemo(() => {
    
    return interpret("count()+rgb()",ctx)
  })


  return (
    <table>
      <thead>
        <tr>
          <th>===列标题1===</th>
          <th>|====列标题2==</th>
          <th>列标题3</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td colSpan="3">

          {s()}
          </td>
        </tr>
        <tr>
          <td>
            <input type='text' oninput={(e) => {
              console.log(e)
              setCount(Number.parseInt(e.target.value))
            }}></input>
          </td>
          <td>行1，列2</td>
          <td>行1，列3</td>
        </tr>
        <tr>
          <td>行2，列1</td>
          <td>行2，列2</td>
          <td>行2，列3</td>
        </tr>
      </tbody>
    </table>
  );
};

export default App;
