const detail = {
    id: -1
}

const detailReducer = (state = detail, action) => {
    switch (action.type) {
        case 'DETAIL_ID':
            return Object.assign({}, state, {
                id: action.payload
            });
        default:
            return state;
    }
}

export default detailReducer;