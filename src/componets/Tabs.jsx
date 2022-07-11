import {BiHomeCircle, BiCategory, BiCog} from 'react-icons/bi'
import {NavLink} from 'react-router-dom'

const Tabs = () => {
  return (
    <div className="w-screen h-16 flex justify-around items-center bg-base-100 z-50">
      <NavLink
        to={'/home'}
        className={({isActive}) => (isActive ? 'tab_active' : 'tab')}
      >
        <BiHomeCircle />
      </NavLink>
      <NavLink
        to={'/category'}
        className={({isActive}) => (isActive ? 'tab_active' : 'tab')}
      >
        <BiCategory />
      </NavLink>
      <NavLink
        to={'/setting'}
        className={({isActive}) => (isActive ? 'tab_active' : 'tab')}
      >
        <BiCog />
      </NavLink>
    </div>
  )
}
export default Tabs