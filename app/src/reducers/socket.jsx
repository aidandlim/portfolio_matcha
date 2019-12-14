const socket = null;

const socketReducer = (state = socket, action) => {
    switch (action.type) {
        case 'SOCKET':
            return Object.assign({}, state, {
                socket: action.payload
            });
        default:
            return state;
    }
}

export default socketReducer;