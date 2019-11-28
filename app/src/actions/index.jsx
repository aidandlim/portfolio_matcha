/***************************************************/

export const ui_color = (value) => {
    return {
        type: 'UI_COLOR',
        payload: value
    };
};

export const ui_notification = (value) => {
    return {
        type: 'UI_NOTIFICATION',
        payload: value
    };
};

/****************************************************/

export const auth_isLogin = (value) => {
    return {
        type: 'AUTH_ISLOGIN',
        payload: value
    };
};

export const auth_landingStatus = (value) => {
    return {
        type: 'AUTH_LANDINGSTATUS',
        payload: value
    };
};

/***************************************************/

export const match_isDetail = (value) => {
    return {
        type: 'MATCH_ISDETAIL',
        payload: value
    };
};

/***************************************************/

export const map_center = (value) => {
    return {
        type: 'MAP_CENTER',
        payload: value
    };
};

export const map_address = (value) => {
    return {
        type: 'MAP_ADDRESS',
        payload: value
    };
};

/***************************************************/

export const chat_list = (value) => {
    return {
        type: 'CHAT_LIST',
        payload: value
    };
};

export const chat_current = (value) => {
    return {
        type: 'CHAT_CURRENT',
        payload: value
    };
};