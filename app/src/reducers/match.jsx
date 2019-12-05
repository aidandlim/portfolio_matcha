const match = {
    isDetail: false
}

const matchReducer = (state = match, action) => {
    switch (action.type) {
        case 'MATCH_ISDETAIL':
            return Object.assign({}, state, {
                isDetail: action.payload
            });
        default:
            return state;
    }
}

export default matchReducer;