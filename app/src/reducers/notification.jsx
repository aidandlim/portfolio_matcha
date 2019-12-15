const notification = {
    list: []
}

const notificationReducer = (state = notification, action) => {
    switch (action.type) {
        case 'NOTIFICATION_LIST':
            return Object.assign({}, state, {
                list: action.payload
            });
        default:
            return state;
    }
}

export default notificationReducer;