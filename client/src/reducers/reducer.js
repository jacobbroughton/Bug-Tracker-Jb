export default (state = 0, action) => {
    switch(action.type) {
        case "ADD":
            state = state + action.payload;
            return state;
        default: 
            return state;
    }
}