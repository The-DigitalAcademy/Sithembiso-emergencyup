import { BiUserVoice } from 'react-icons/bi'

const Header = ({ name }) => {
  return (

    <div className="w-full h-24 md:h-32 flex justify-between items-center px-4 md:px-8 bg-base-200">
      <div className="flex flex-col justify-center items-center">
        <BiUserVoice className="text-3xl md:text-4xl" />
        <div className="-mt-1 flex">
          <p className="">Voice</p>{' '}
          <p className="animate-bounce font-bold text-primary">UP</p>
        </div>
      </div>
      <div className="italic font-thin">
        Welcome <span className="font-normal">{name}</span>
      </div>
    </div>
  )
}
export default Header