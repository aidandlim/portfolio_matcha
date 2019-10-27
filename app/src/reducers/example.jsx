const example = {
    ex: 0
}

const exampleReducer = (state = example, action) => {
    switch (action.type) {
        case 'ACTION_EXAMPLE':
            return Object.assign({}, state, {
                ex: action.payload
            });
        default:
            return state;
    }
}

export default exampleReducer;