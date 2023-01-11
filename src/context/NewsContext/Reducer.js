export const INITIAL_STATE = {
    newsObjects: [],
    category: [],
    country: []
}

export const ACTIONS = {
    SET_NEWS: 'SET_NEWS',
    REMOVE_NEWS: 'REMOVE_NEWS',
    CLEAR_INFORMATION: 'CLEAR_INFORMATION'
}

export default (state, action) => {

    const { type, payload } = action

    //console.log('news reducer: TYPE: ', type)
    //console.log('news reducer: PAYLOAD:', payload)
    //console.log('news reducer: STATE:', state)

    switch (type) {
        case ACTIONS.SET_NEWS:
            return {
                newsObjects: [...state.newsObjects, payload.newsArr],
                category: [...state.category, payload.category],
                country: [...state.country, payload.country]
            }

        case ACTIONS.REMOVE_NEWS:
            console.log(payload.categoryIndex)
            console.log(payload.item)
            const filteredArray = state.newsObjects[payload.categoryIndex].filter(el => el !== payload.item)
            console.log('filteredArray', filteredArray)
            return {
                ...state,
                newsObjects: [
                    state.newsObjects[payload.categoryIndex] = state.newsObjects[payload.categoryIndex].filter(el => el !== payload.item)
                ]
            }

        case ACTIONS.CLEAR_INFORMATION:
            return {
                newsObjects: [],
                category: [],
                country: []
            }

        default:
            return state
    }
}