import {BiUserVoice, BiChevronLeft} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'

const InfoPage = () => {
  let navigate = useNavigate()

  return (
    <div className="h-full flex flex-col justify-center gap-10 md:gap-16 p-4 md:p-16">
      <div className="flex flex-col -mt-8">
        <BiUserVoice className="text-9xl ml-6" />
        <div className="-mt-4 flex">
          <p className="text-4xl">Voice</p>{' '}
          <p className="animate-bounce text-4xl font-bold text-primary">UP</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-thin">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, autem!
        </p>
        <p className="text-xl font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel
          harum aliquam excepturi laboriosam! Soluta provident impedit facilis
          itaque hic.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="btn btn-primary btn-wide"
          onClick={() => navigate('/', {replace: true})}
        >
          <BiChevronLeft className="mr-1" />
          Back
        </button>
      </div>
    </div>
  )
}
export default InfoPage
