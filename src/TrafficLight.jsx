import React, { useState } from 'react'


const TrafficLight = () => {
    const [luzActiva, setLuzActiva] = useState('');
    return (
        <div className='container-fluid d-flex'>
            <div className='Semásforo'>
                <div onClick={() => setLuzActiva('LuzRoja')} className={'LuzRoja' + (luzActiva === 'LuzRoja' ? ' glow' : '')}></div>
                <div onClick={() => setLuzActiva('LuzAmarilla')} className={'LuzAmarilla' + (luzActiva === 'LuzAmarilla' ? ' glow' : '')}></div>
                <div onClick={() => setLuzActiva('LuzVerde')} className={'LuzVerde' + (luzActiva === 'LuzVerde' ? ' glow' : '')}></div>
            </div>
        </div>
    )
}

export default TrafficLight








