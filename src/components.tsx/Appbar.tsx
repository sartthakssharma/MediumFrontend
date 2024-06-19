import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import md from '../assets/medium.png'

const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
          <div className="flex gap-2">
          <img src={md} className="h-8 w-8"/>
          <p className="text-2xl font-mono font-semibold">Medium</p>
          </div>
        </Link>
        <div>
          <Link to={'/publish'}><button type="button" className="text-white mr-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
          </Link>
          <Link to={'/signin'}>
            <Avatar name="Sarthak" size="big"/>
          </Link>
        </div>
    </div>
  )
}

export default Appbar