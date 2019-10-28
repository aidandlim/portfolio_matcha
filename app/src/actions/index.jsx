/****************************************************/

export const ui_nav = (value) => {
    return {
        type: 'UI_NAV',
        payload: value
    };
};

/***************************************************/

export const map_latitude = (value) => {
    return {
        type: 'MAP_LATITUDE',
        payload: value
    };
};

export const map_longitude = (value) => {
    return {
        type: 'MAP_LONGITUDE',
        payload: value
    };
};