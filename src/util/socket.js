import io from 'socket.io-client';
import {baseUrl} from './http-commons'

const socket = io(baseUrl);

export default socket;