const chat = {
    list: [
        {
            id: 0,
            picture: 'test1'
        },
        {
            id: 1,
            picture: 'test2'
        }
    ],
    current: -1
}

const chatReducer = (state = chat, action) => {
    switch (action.type) {
        case 'CHAT_LIST':
            return Object.assign({}, state, {
                list: action.payload
            });
        case 'CHAT_CURRENT':
            return Object.assign({}, state, {
                current: action.payload
            });
        default:
            return state;
    }
}

export default chatReducer;