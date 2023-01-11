export const INITIAL_STATE = {
    selectedCategories: [],
    selectedCountries: []
}

//console.log('selectedCategories', state.selectedCategories)
//console.log('selectedCountries', selectedCountries)

export const ACTIONS = {
    SET_CATEGORY: 'SET_CATEGORY',
    REMOVE_CATEGORY: 'REMOVE_CATEGORY',
    SET_COUNTRY: 'SET_COUNTRY',
    REMOVE_COUNTRY: 'REMOVE_COUNTRY',
    CLEAR_ALL: 'CLEAR_ALL'
}

export default (state, action) => {

    const { type, payload } = action

    switch (type) {
        case ACTIONS.SET_CATEGORY:
            return {
                ...state,
                selectedCategories: [...state.selectedCategories, payload],
            }

        case ACTIONS.REMOVE_CATEGORY:
            return {
                ...state,
                selectedCategories: [...state.selectedCategories.filter(item => item !== payload)]
            }

        case ACTIONS.SET_COUNTRY:
            return {
                ...state,
                selectedCountries: [...state.selectedCountries, payload]
            }

        case ACTIONS.REMOVE_COUNTRY:
            return {
                ...state,
                selectedCountries: [...state.selectedCountries.filter(item => item !== payload)]
            }

        case ACTIONS.CLEAR_ALL:
            return {
                selectedCountries: [],
                selectedCategories: []
            }

        default:
            return state
    }
}