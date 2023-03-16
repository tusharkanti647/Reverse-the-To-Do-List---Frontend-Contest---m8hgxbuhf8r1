import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({ vobj, setVobj, ind, id, cre }) {
  //const [value1, setValue1] = useState(vobj[ind]);
  //console.log(vobj[ind]);
  //console.log(vobj);

  const handel = (e) => {
    //setValue1(e.target.value);

    const newArr = [...vobj];
    newArr[ind] = e.target.value;
    // newArr.splice(ind, 1);
    // newArr.push(obj, ind);
    setVobj(newArr);
  }
  return (<tr>
    <td>
      <p>{id}</p>
    </td>
    <td>
      <input value={vobj[ind]} onChange={handel} />
    </td>
    <td>
      <p>{cre}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
    value: ""
  }, {
    id: 'todo2',
    createdAt: '18:00',
    value: ""
  }
  ]);

  const valueObj = ["", ""];
  const [vobj, setVobj] = useState(valueObj)

  const revese = () => {
    const newArr = [{ ...todos[1] }, { ...todos[0] }];
    const vnewArr = [vobj[1], vobj[0]];
    setVobj(vnewArr);
    setTodos(newArr);
  }
  //console.log(vobj);

  return (
    <div id="main">
      <button onClick={revese}>Reverse</button>
      <table>
        <tbody>
          {todos.map((ele, ind) => (
            <ToDo key={ind} vobj={vobj} setVobj={setVobj} ind={ind} id={ele.id} cre={ele.createdAt} />
          ))}

        </tbody>
      </table>
    </div>
  )
}


export default App;