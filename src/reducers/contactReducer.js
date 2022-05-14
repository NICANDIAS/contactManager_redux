import { GET_CONTACTS } from "../actions/types";

const initialState = {
    contacts: [
        {
            id: 1,
            name: "john Doe",
            email: "John@gmail.com",
            phone: "555-555-5555"
        },
        {
            id: 2,
            name: "Karren williams",
            email: "kwillams@gmail.com",
            phone: "222-222-2222"
        },
        {
            id: 3,
            name: "Henry Johnson",
            email: "henry@gmail.com",
            phone: "333-333-3333"
        }
    ],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state
            };
        default:
            return state;
    }
}