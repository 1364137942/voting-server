/**
 * Created by ali on 16-11-24.
 */
import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store);
