import './Search.css'
import { BiSearch } from 'react-icons/bi'
import { useState } from "react";

const Search = ({ onSearch }) => {

  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() === "") return;
    onSearch(input);
    setInput("");
  };

  return (
    <>
      <div className="search">
        <input type="text" placeholder='Enter your location' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()}/>
        <BiSearch size={20} className="search-icon" onClick={handleSearch}/>
      </div>

    </>
  )
}

export default Search