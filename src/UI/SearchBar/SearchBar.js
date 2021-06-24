import React from 'react';

import classes from './Searchbar.module.css'
const SearchBar=()=>{
    return(
          <input className={classes.SearchBar} placeholder={'      search'} /> 
        
    );
}

export default SearchBar;