import { useEffect, useState } from "react"
import axios from "axios"
import { usePrayersContext } from "../hooks/usePrayersContext"

//components
import PrayerDetails from "../components/PrayersDetails"
import PrayerForm from "../components/PrayerForm"

const Home = () => {
  const [data, setData] = useState([])

  // const {state, dispach} = usePrayersContext()

  const url = "http://localhost:4000/prayers"

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data)

      if (res.ok) {
        dispach({type: 'SET_PRAYERS', payload: json})
      }
      // console.log(res.data.prayers[0].body)
    })
  }, [])


  return (
    <div>
      <div className="home">
      <div className="prayers">
        {data && data.prayers?.map((prayer) => {
          return (
            <PrayerDetails prayer={prayer} key={prayer._id}/>
          )
        })}
      </div>
      <PrayerForm />
      </div>
    </div>
  )
}

export default Home
