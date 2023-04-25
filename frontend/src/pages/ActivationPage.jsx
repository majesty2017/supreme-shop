import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { server } from "../server"

const ActivationScreen = () => {
  const {activation_token} = useParams()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async() => {
        try {
          const res = await axios.post(`${server}/user/activation`,  {
            activation_token
          });
          console.log(res.data.message);
        } catch (error) {
          console.log(error.response.data.message);
          setError(true)
        }
      }
      activationEmail()
    }
  }, [activation_token])
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      { error ? (
        <p className="text-2xl text-rose-500">Your account is already activated!</p>
      ) : (
        <p className="text-2xl text-green-500">Your account has been activated successfully!</p>
      )}
    </div>
  )
}

export default ActivationScreen