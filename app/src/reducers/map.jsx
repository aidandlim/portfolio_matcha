const map = {
    center: {
        latitude: 0,
        longitude: 0,
    },
    address: 'Newark, CA, USA'
}

const mapReducer = (state = map, action) => {
    switch (action.type) {
        case 'MAP_CENTER':
            return Object.assign({}, state, {
                center: action.payload
            });
        case 'MAP_ADDRESS':
            return Object.assign({}, state, {
                address: action.payload
            });
        default:
            return state;
    }
}

export default mapReducer;