const initialState =
    {
        messages: [
            {
                id: 0,
                author: "Alex",
                text: "hello",
                chatId: 1
            },
            {
                id: 1,
                author: "Andrey",
                text: "hey hey",
                chatId: 1
            },
            {
                id: 2,
                author: "Anton",
                text: "hey",
                chatId: 2
            }
        ]
    }

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case('submit'):
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            }

        default:
            return state;
    }
}