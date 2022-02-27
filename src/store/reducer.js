import { actions } from "../data/options";

const defaultState = {
    password: '',
    length: 7,
    needUpdate: false,
    choice:
    {
        id: 3,
        item: 'All characters',
        checked: true,
        explanation: 'Any character combinations like !, 7, h, K, and l1'
    },
    variationId: [1, 2, 3, 4],
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.setLength:
            let value = action.payload;
            if (value > 30) value = 30;
            return { ...state, length: value };
        case actions.setPassword:
            return { ...state, password: action.payload };
        case actions.updatePassword:
            return { ...state, needUpdate: action.payload };
        case actions.setChoice:
            return { ...state, choice: action.payload };

        default:
            return state;
    }
}