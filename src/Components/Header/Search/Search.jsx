import './Search.css'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <>
      <div className="search">
        <input type="text" placeholder='Enter your location'/>
        <BiSearch size={20} className="search-icon"/>
      </div>
    </>
  )
}

export default Search