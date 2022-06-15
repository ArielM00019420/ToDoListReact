import React, {useRef, useState} from "react";
import Todo from "../List/Todo";

const Input = () => {
    //Esto solo fue para hacer una prueba en el inspector
    const ToDoInput = useRef(null);
    //Defino el "arreglo/lista"
    const [toDo, setToDo] = useState([]);
    //Con esto estoy llamando al estado y guardandolo
    function addNewToDo() {
        setToDo([...toDo, ToDoInput.current.value])
    };

    return (
        <div>
            <div>
                <input 
                    placeholder="¿Que planeas hacer...?"
                    ref={ToDoInput}
                />
                {/* El onClick solo llama a la funcion cuando le das click al boton */}
                <button className = "bg-green-300" onClick={addNewToDo}>
                Agregar
                </button>
            </div>  
            <div>
                {/* Aqui solo se esta llamando al prop para que se cree */}
                {
                    toDo.map(it => <Todo aToDo = {it}/>)
                }
            </div>
        </div>
    );
}

export default Input;
