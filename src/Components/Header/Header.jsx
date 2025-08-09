import './Header.css'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-title">
          <p>ClimaView</p>
        </div>

        <div className="header-bg-mode">
          <MdLightMode/>
          <MdDarkMode/>
        </div>
      </div>
    </>
  )
}

export default Header