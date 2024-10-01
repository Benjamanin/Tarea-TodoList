import { TextInput, Button, Stack, Checkbox, Paper, Group} from "@mantine/core";
import './TodoForm.css';
import { useState } from 'react';
import React from "react";

export default function TodoForm() {
    const [Tarea, setTarea] = useState("");
    const [ListaTareas, setListaTareas] = useState([]);

    //Actualizamos el estado de la tarea
    const handleChange = (e) => {
        setTarea(e.target.value);
    }
    //Agregamos la tarea a la lista
    const AgregarTarea = () => {
        if (Tarea.trim() !== '') {
            setListaTareas([...ListaTareas, { text: Tarea, completed: false }]);
            setTarea('');
        }
    }

    //Marca la tarea como completada
    const CambiarACompletado = (index) => {
        const newTodos = [...ListaTareas];
        newTodos[index].Completed = !newTodos[index].Completed;
        setListaTareas(newTodos);
    }

    //Borra la tarea de la lista
    const eliminarTarea = (index) => {
        const newTodos = [...ListaTareas];
        newTodos.splice(index, 1);
        setListaTareas(newTodos);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
           <Group className="AdicionTarea">
                <TextInput type="text" className="textinput" placeholder="Añade una tarea" 
                value={Tarea} onChange={handleChange} />
                <Button
                    variant="outline" 
                    color="green"
                    radius={"xl"} 
                    onClick={AgregarTarea}> Añadir
                </Button>
           </Group>

           <br/>

           <Stack spacing="md"></Stack>
           {ListaTareas.map((tarea, index) => (
           <Paper shadow="sm" radius="sm" withBorder p="lg">
                
                    
                        <Group key={index}>
                            <Checkbox
                                color="pink" radius={"xl"} checked={tarea.Completed} onChange={() => CambiarACompletado(index)} />
                            <span className={tarea.Completed ? 'Completed' : ''}>{tarea.text}</span>
                            <Button className="pink-button" color="pink" variant="light" radius="xl" onClick={() => eliminarTarea(index)}>Borrar</Button>
                        </Group>
                   
                
           </Paper>
           
        ))}
        <Stack/>
        </form>
        
    );
}