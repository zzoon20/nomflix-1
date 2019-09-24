import React, { useState } from 'react';

export const SearchContext = React.createContext();

const SearchContextProvider = ({children}) => {
    const [ search, setSearch ] = useState({
        searchTerm: "",
        movieResults: null,
        tvResults: null
    })

    const inputSearchTerm = (text) => setSearch({ ...search, searchTerm: text });
    const setSearchResults = (movieResults, tvResults) => setSearch( { ...search, movieResults, tvResults })

    return (
        <SearchContext.Provider value={ { search, inputSearchTerm, setSearchResults } }>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;