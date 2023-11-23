import React from 'react'

function SearchBox(props) {
    
    const handleChange = (event) =>{
       props.setSearchValue(event.target.value);
       console.log(props.searchValue);
    }
    
    return (
    <div>
       <div className="container">
        < div className="row justify-content-center">
            
                <div className="input-group">
                    <input type="text" className="form-control" onChange={handleChange}  
                    value = {props.searchValue}
                    placeholder="Search..."/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
            
        </div>
    </div>
    </div>
  )
}

export default SearchBox
