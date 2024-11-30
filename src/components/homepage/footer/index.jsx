import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="">
        <footer className="bg-gradient-to-r from-purple-900 to-pink-900 h-96 p-10 block justify-center">
            <p className="flex justify-center font-sans text-lg">Spark Event Management, 200 - 1110 7 Street SW, Calgary, Alberta, T2R 1A2, Canadainfo@eventsbyspark.com</p>
            <div className="p-10 flex justify-center h-52 w-full ">
            </div>
            <p className="mt-16 flex justify-center align-bottom font-serif text-gray-400 font-semibold gap-2">Powered by <span className='underline'>Abiolaspace</span></p>
        </footer>
    </div>
  )
}

export default Footer
