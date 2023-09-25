import { PrayerContext } from "../context/PrayerContext"
import { useContext } from "react"

export const usePrayersContext = () => {
  const context = useContext(PrayerContext)

  // Check if the context is defined
  if (!context) {
    throw new Error(
      "usePrayersContext must be used within a PrayerContextProvider"
    )
  }

  return context
}
