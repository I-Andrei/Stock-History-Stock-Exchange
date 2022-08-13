import React, { useState } from 'react';

let alert = ""

function SearchStock(props) {

    const [search, setSearch] = useState("");
    
    function typedWord(event) {
        setSearch(event.target.value)
    }

    function buttonSearchClicked() {
        if(props.searchStock.indexOf(search) === -1){
            alert = "The stock does not exists in our list!"
        } else 
            alert = "The stock exists!"
        setSearch("")
    }

    return (
        <div>
            <label>Search Word:</label>
            <input type="text" onChange={typedWord} placeholder="Lower case, all one word"></input>
            <button type="button" onClick={() => buttonSearchClicked()}> Search Word </button>
            <div>{alert}</div>
        </div>
    )
  }
  
  export default SearchStock;