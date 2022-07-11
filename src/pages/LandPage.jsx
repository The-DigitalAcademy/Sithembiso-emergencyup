import {useState, useContext, useEffect} from 'react'
import {BiUserVoice, BiInfoCircle, BiUser} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import {notify} from '../helper/alert'
import appContext from '../context/appContext'
import storage from '../helper/storage'

const LandPage = () => {
  const {name_add} = useContext(appContext)
  let navigate = useNavigate()
  const [name, setName] = useState('')

  const onSubmit = () => {
    if (!name) {
      notify('Name cannot be empty')
      return
    }

    if (name.length < 3) {
      notify('Name cannot be less than 3 characters')
      return
    }

    name_add(name)
    storage.set('name', name)
    navigate('/home', {replace: true})
  }

  useEffect(() => {
    if (storage.exist('name')) {
      navigate('/home', {replace: true})
    }
  })

  return (
    <div className="h-full flex flex-col items-center justify-center gap-6 md:gap-8">
      <div className="flex flex-col justify-center items-center -mt-20">
        <BiUserVoice className="text-9xl ml-6" />
        <div className="-mt-4 flex">
          <p className="text-4xl">Voice</p>{' '}
          <p className="animate-bounce text-4xl font-bold text-primary">UP</p>
        </div>
      </div>

      <div className="w-full md:w-96 px-6">
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onInput={(e) => setName(e.target.value)}
          className="input input-bordered input-primary w-full"
        />
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-outline btn-secondary w-36"
          onClick={() => navigate('/info', {replace: true})}
        >
          <BiInfoCircle className="mr-1" />
          Info
        </button>
        <button className="btn btn-primary w-36" onClick={onSubmit}>
          <BiUser className="mr-1" />
          Submit
        </button>
      </div>
    </div>
  )
}
export default LandPage