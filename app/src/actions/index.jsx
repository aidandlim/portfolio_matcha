/***************************************************/

export const ui_color = (value) => {
    return {
        type: 'UI_COLOR',
        payload: value
    };
};

export const ui_landing = (value) => {
    return {
        type: 'UI_LANDING',
        payload: value
    };
};

export const ui_notification = (value) => {
    return {
        type: 'UI_NOTIFICATION',
        payload: value
    };
};

export const ui_detail = (value) => {
    return {
        type: 'UI_DETAIL',
        payload: value
    };
};

/***************************************************/

export const user_data = (value) => {
    return {
        type: 'USER_DATA',
        payload: value
    };
};

export const user_isComplete = (value) => {
    return {
        type: 'USER_ISCOMPLETE',
        payload: value
    };
};

/***************************************************/

export const detail_id = (value) => {
    return {
        type: 'DETAIL_ID',
        payload: value
    };
};

/***************************************************/

export const match_data = (value) => {
    return {
        type: 'MATCH_DATA',
        payload: value
    };
};

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