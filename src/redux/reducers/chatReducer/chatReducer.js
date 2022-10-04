const initialState =
    {
        chats: [
            {
                id: 1,
                name: "chat1"
            },
            {
                id: 2,
                name: "chat2"
            },
            {
                id: 3,
                name: "chat3"
            },
        ]
    }

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {

        case('delete'):
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload)
            }
        case('add'):
            return {
                ...state,
                chats: state.chats.concat(action.payload)
            }
        default:
            return state;
    }
}