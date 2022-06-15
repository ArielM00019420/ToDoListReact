import React,{useState} from 'react'

const Todo = ({aToDo}) => {
    //Se hace algo similar que en imput solo que por default ahora le estoy entregando un booleano y no un arreglo
   const [checked, setChecked ] = useState(false);

    return (
        <div>
            <div>
            {aToDo}
            {/* Aqui solo se hace un if para ver si se ha checkeado al clickear*/}
            <button  onClick ={() => setChecked(!checked)} className = {`${ checked ? "bg-red-600" : "bg-yellow-300"}`} >
            Listo!!!
            </button>
            </div>
        </div>
    )
}

export default Todo
