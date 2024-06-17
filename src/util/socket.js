import io from 'socket.io-client';
import baseUrl from './http-commons'

export const socket = io(baseUrl);