/****************************************************/

export const auth_isLogin = (value) => {
    return {
        type: 'AUTH_ISLOGIN',
        payload: value
    };
};

export const auth_onSigninPage = (value) => {
    return {
        type: 'AUTH_ONSIGNINPAGE',
        payload: value
    };
};

export const auth_onSignupPage = (value) => {
    return {
        type: 'AUTH_ONSIGNUPPAGE',
        payload: value
    };
};

export const auth_onForgotPage = (value) => {
    return {
        type: 'AUTH_ONSFORGOTPAGE',
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

export const ui_color = (value) => {
    return {
        type: 'UI_COLOR',
        payload: value
    };
};