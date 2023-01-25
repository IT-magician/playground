import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="w-full h-55 border-b-1 border-gray-600 bg-white">
      <div className="w-full h-7 bg-blue-600"></div>
      <div className="w-full h-48 flex justify-between items-center">
        <div className="text-15 ml-14">
          <Link className="bg-kakao mr-5" to="">home</Link>|
          <Link className="bg-kakao mx-5" to="/counter">counter</Link>|
          <Link className="bg-kakao mx-5" to="/todo">todo</Link>
        </div>
        <div className="w-52 h-20 mr-13"></div>
      </div>
    </div>
  )

}