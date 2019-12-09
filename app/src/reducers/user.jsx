const user = {
    data: {},
    // data: {
    //     id: 0,
    //     email: 'ortivo.sol@gmail.com',
    //     first_name: 'Aidan',
    //     last_name: 'Lim',
    //     birth_year: '1991',
    //     gender: '1',
    //     preference: '1',
    //     address: 'Fremont, CA, USA',
    //     latitude: '37',
    //     longitude: '-122',
    //     picture1: '51145a40-1a22-11ea-8089-d578785938a3.jpeg'
    // },
    isComplete: true,
}

const userReducer = (state = user, action) => {
    switch (action.type) {
        case 'USER_DATA':
            return Object.assign({}, state, {
                data: action.payload
            });
        case 'USER_ISCOMPLETE':
            return Object.assign({}, state, {
                isComplete: action.payload
            });
        default:
            return state;
    }
}

export default userReducer;