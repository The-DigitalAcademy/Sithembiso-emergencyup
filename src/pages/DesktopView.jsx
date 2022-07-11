import {BiUserVoice} from 'react-icons/bi'

const DesktopView = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        <div className="flex flex-col justify-center items-center">
          <BiUserVoice className="text-9xl ml-6" />
          <div className="-mt-4 flex">
            <p className="text-4xl">Voice</p>{' '}
            <p className="animate-bounce text-4xl font-bold text-primary">UP</p>
          </div>
        </div>
      </div>
      <div className="text-4xl font-thin mt-6">Use your Phone or Tablet</div>
    </div>
  )
}
export default DesktopView