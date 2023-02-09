const initState = {
    users: [
        { id: 1, name: 'Aa' },
        { id: 2, name: 'Bb' }
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}
export default rootReducer