import {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import appContext from '../context/appContext'
import storage from '../helper/storage'
import Tabs from './Tabs'
import Header from './Header'

const Layout = ({children}) => {
  const {name, name_add, theme} = useContext(appContext)
  let navigate = useNavigate()

  useEffect(() => {
    if (!storage.exist('name')) {
      navigate('/', {replace: true})
    }
    name_add(storage.get('name'))
  }, [navigate])

  return (
    <div
      className="w-screen h-screen flex flex-col bg-base-200"
      data-theme={theme}
    >
      <Header name={name} />
      <div className="h-screen bg-base-100 rounded-t-[2rem] md:rounded-t-[3rem]">
        {children}
      </div>
      <Tabs />
    </div>
  )
}
export default Layout