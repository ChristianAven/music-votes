import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

const BandAdd = () => {

    const [nombre, setNombre] = useState('')
    const {socket} = useContext(SocketContext)

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (nombre.trim().length >= 1) {
            socket.emit('añadir-banda', nombre);
        };

        setNombre('');
    }

    return (
        <>
            <h3>Add music Style</h3>

            <form onSubmit={onSubmit}>
                <input
                    value = {nombre}
                    onChange = { (e) => setNombre(e.target.value) }
                    className = "form-control"
                    placeholder = "New nusic style"    
                />
            </form>
        </>
    )
}
export default BandAdd
