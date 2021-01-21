import React from 'react'
import { SocketProvider } from './context/SocketContext'
import { MusicApp } from './MusicApp'

export const App = () => {
    return (
        <SocketProvider>
           <MusicApp/>
        </SocketProvider>
    )
}
