import { useReducer } from "react"
import NewsContext from "./index"
import NewsReducer, { ACTIONS, INITIAL_STATE } from './Reducer'

const NewsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(NewsReducer, INITIAL_STATE)

    const setNews = newsInfo => {
        dispatch({
            type: ACTIONS.SET_NEWS,
            payload: newsInfo
        })
    }

    const removeNewsFromList = item => {
        dispatch({
            type: ACTIONS.REMOVE_NEWS,
            payload: item
        })
    }

    const clearInformation = () => {
        dispatch({
            type: ACTIONS.CLEAR_INFORMATION
        })
    }

    return (
        <NewsContext.Provider
            value={{
                ...state,
                setNews,
                removeNewsFromList,
                clearInformation
            }}
        >
            {children}
        </NewsContext.Provider>
    )

}
export default NewsProvider