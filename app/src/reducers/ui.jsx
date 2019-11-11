const ui = {
    color: 4
}

const uiReducer = (state = ui, action) => {
    switch (action.type) {
        case 'UI_COLOR':
            return Object.assign({}, state, {
                color: action.payload
            });
        default:
            return state;
    }
}

export default uiReducer;