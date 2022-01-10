import {useState} from 'react';

const ToDo = ()=>{  
  const [toDo, setToDo]=useState('');
  const [toDos, setToDos]=useState([]);

  const onChange=(e)=>{
    setToDo(e.target.value);
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    if(toDo===''){
      return;
    }
    setToDos((current) => [toDo, ...current]);
    setToDo('');
  }

  return (
    <div>
      <h1>ToDos Length : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value = {toDo} type="text" placeholder=''/>
        <button>Add</button>
      </form>
      <hr/>
      {toDos.map((todo, index)=>
        (
          <li key={index}>{todo}</li>
        )
      )}
    </div>
  );
}

export default ToDo;