const filter = (state='All', action) => {
    switch(action.type){
        case 'FILTER_BTN':
        return action.filter;
        default:
        return state
    }
}

export default filter