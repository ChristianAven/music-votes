import React, { useContext } from 'react';
import BandAdd from './components/BandAdd';
import BandList from './components/BandList';
import BandsChart from './components/BandsChart';
import { SocketContext } from './context/SocketContext';


export const MusicApp = () => {

    const {online} = useContext(SocketContext)

    return (
        <div className="container">
            <div className="alert">
                <p>
                    Service status: 
                    {
                      online
                      ? <span className="text-success"> Online</span>
                      : <span className="text-danger"> Offline</span>  
                    }
                    
                </p>
            </div>

            <h1>Music styles</h1>
            <hr/>

            <div className="row">
                <div className="alert">
                    <BandsChart/>
                </div>            
            </div>

            <div className="row">
                <div className="col-8">
                    <BandList />
                </div>
                <div className="col-4">
                    <BandAdd />
                </div>
            </div>

        </div>
    );
}
