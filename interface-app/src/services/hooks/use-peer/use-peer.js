import { Peer } from 'peerjs';
 
export function usePeer() {
    const peer = new Peer('123456',{
        host: '192.168.18.22',
        port: 3001,
        path: '/peerjs'
    });
    return { peer }
}