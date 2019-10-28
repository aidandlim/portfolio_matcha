const map = {
    center: null
}

const mapReducer = (state = map, action) => {
    switch (action.type) {
        case 'MAP_CENTER':
            return Object.assign({}, state, {
                center: action.payload
            });
        default:
            return state;
    }
}

export default mapReducer;