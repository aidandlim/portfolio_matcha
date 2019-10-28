const map = {
    latitude: -1,
    longitude: -1,
}

const mapReducer = (state = map, action) => {
    switch (action.type) {
        case 'MAP_LATITUDE':
            return Object.assign({}, state, {
                latitude: action.payload
            });
        case 'MAP_LONGITUDE':
            return Object.assign({}, state, {
                longitude: action.payload
            });
        default:
            return state;
    }
}

export default mapReducer;