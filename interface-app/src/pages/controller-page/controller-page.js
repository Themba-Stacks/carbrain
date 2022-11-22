import React, { useEffect, useState } from 'react';
import { usePeer } from '../../services';

export function ControllerPage(){
    const { peer } = usePeer();
    const [ peerState, setPeerState ] = useState(peer);


    
    return(
        <main className='bg-slate-700'>
            <h1 className='text-5xl'>Hello from Controller page</h1>
            <h2>{peerState.id}</h2>
        </main>
    );
}