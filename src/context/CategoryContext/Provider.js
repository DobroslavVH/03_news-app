import React, { useReducer } from "react";
import CategoryContext from "./index";
import CategoryReducer, { ACTIONS, INITIAL_STATE } from "./Reducer";

const CategoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CategoryReducer, INITIAL_STATE)

    const setCategory = selectedCategory => {
        dispatch({
            type: ACTIONS.SET_CATEGORY,
            payload: selectedCategory
        })
    }

    const removeCategory = removeCategory => {
        dispatch({
            type: ACTIONS.REMOVE_CATEGORY,
            payload: removeCategory
        })
    }

    const setCountry = selectedCountry => {
        dispatch({
            type: ACTIONS.SET_COUNTRY,
            payload: selectedCountry
        })
    }

    const removeCountry = removeCountry => {
        dispatch({
            type: ACTIONS.REMOVE_COUNTRY,
            payload: removeCountry
        })
    }

    const clearCategoryAndCountry = () => {
        dispatch({
            type: ACTIONS.CLEAR_ALL
        })
    }

    return (
        <CategoryContext.Provider
            value={{
                ...state,
                setCategory,
                removeCategory,
                setCountry,
                removeCountry,
                clearCategoryAndCountry
            }}
        >
            {children}
        </CategoryContext.Provider>
    )

}

export default CategoryProvider