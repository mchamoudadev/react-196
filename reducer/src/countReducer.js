export const INITIAL_STATE = {
    count: 0
};

function countReducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error;
    }
}

export default countReducer;