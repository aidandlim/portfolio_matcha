const chatbot = {
    message: [],
    reflection: [],
}

const chatbotReducer = (state = chatbot, action) => {
    switch (action.type) {
        case 'CHATBOT_MESSAGE':
            return Object.assign({}, state, {
                message: action.payload
            });
        case 'CHATBOT_REFLECTION':
            return Object.assign({}, state, {
                reflection: action.payload
            });
        default:
            return state;
    }
}

export default chatbotReducer;