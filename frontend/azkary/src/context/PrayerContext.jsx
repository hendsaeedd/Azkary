import { createContext, useReducer } from "react"

// Create a context object
export const PrayerContext = createContext()

// Create a reducer function to handle the state
export const prayersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRAYERS':
      return {
        prayers: action.payload
      }
    case 'CREATE_PRAYER':
      return {
        prayers: [...state.prayers, action.payload]
      }
    default:
      return state
  }
}

export const PrayerContextProvider = ({children}) => {

  const [state, dispach] = useReducer(prayersReducer, {
    prayers: null
  })

  // Create a reducer function to handle the state
  // dispach({type: 'SET_PRAYERS', payload: {prayers: []}})

  return(
    <PrayerContext.Provider value={{state, dispach}}>
      {children}
    </PrayerContext.Provider>
  )
}