const detail = {
    data: {}
}

const detailReducer = (state = detail, action) => {
    switch (action.type) {
        case 'DETAIL_DATA':
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
}

export default detailReducer;