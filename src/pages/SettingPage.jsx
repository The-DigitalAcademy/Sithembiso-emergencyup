import {useState, useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Layout from '../components/Layout'
import appContext from '../context/appContext'
import storage from '../helper/storage'
import {notify} from '../helper/alert'

const SettingPage = () => {
  let navigate = useNavigate()
  const {theme, change_theme, reset_data} = useContext(appContext)
  const [myTheme, setMyTheme] = useState(theme)

  const handleSwitchTheme = (e) => {
    setMyTheme(e.target.value)
    storage.set('theme', e.target.value)
  }

  const handleResetData = () => {
    if (window.confirm('Reset everything ?')) {
      notify('Successfully reset')
      storage.clear()
      reset_data()
      navigate('/', {replace: true})
    }
  }

  useEffect(() => {
    change_theme(myTheme)
  }, [myTheme])

  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-center px-4 md:px-8 gap-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Select theme</span>
          </label>
          <select
            className="select select-bordered select-primary"
            value={myTheme}
            onChange={handleSwitchTheme}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="valentine">Valentine</option>
            <option value="forest">Forest</option>
            <option value="synthwave">Synthwave</option>
            <option value="cupcake">Cupcake</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary w-full" onClick={handleResetData}>
            Reset the app
          </button>
        </div>
      </div>
    </Layout>
  )
}
export default SettingPage