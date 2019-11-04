const map = {
    center: {
        latitude: 0,
        longitude: 0,
    }
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