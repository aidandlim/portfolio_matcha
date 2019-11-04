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