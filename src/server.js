/**
 * Created by ali on 16-11-24.
 */

import Server from 'socket.io';

export default function startServer(store) {
    const io = new Server().attach(8090);

    //得到当前state，转变为普通的js对象，然后一个经过json序列化的快照会分发到各个连接了服务器的客户端
    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    )
}