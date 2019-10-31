/****************************************************/

export const ui_nav = (value) => {
    return {
        type: 'UI_NAV',
        payload: value
    };
};

export const ui_isLogin = (value) => {
    return {
        type: 'UI_ISLOGIN',
        payload: value
    };
};

export const ui_isRegister = (value) => {
    return {
        type: 'UI_ISREGISTER',
        payload: value
    };
};

export const ui_isForgot = (value) => {
    return {
        type: 'UI_ISFORGOT',
        payload: value
    };
};

/***************************************************/

export const sign_message = (value) => {
    return {
        type: 'SIGN_MESSAGE',
        payload: value
    };
};

export const sign_email = (value) => {
    return {
        type: 'SIGN_EMAIL',
        payload: value
    };
};

export const sign_password = (value) => {
    return {
        type: 'SIGN_PASSWORD',
        payload: value
    };
};

/***************************************************/

export const user_user = (value) => {
    return {
        type: 'USER_USER',
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