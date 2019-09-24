import React, { useContext, useState } from 'react'
import SearchPresenter from './SearchPresenter'
import {moviesApi, tvApi} from 'api'
import { SearchContext } from 'context'


const SearchContainer = () => {
    const {
        search : { searchTerm },
        inputSearchTerm,
        setSearchResults
    } = useContext(SearchContext);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm !== "") {
            searchByTerm();
        }
    };

    const updateTerm = (event) => {
        const {
            target: { value }
        } = event;
        inputSearchTerm(value);
    };

    const searchByTerm = async () => {
        setLoading(true);
        try {
            const { data : {results : movieResults} } = await moviesApi.search(searchTerm)
            const { data : {results : tvResults} } = await tvApi.search(searchTerm)
            setSearchResults(movieResults, tvResults);
        } catch {
            setError("Can't find results");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SearchPresenter
                loading={loading}
                error={error}
                handleSubmit={handleSubmit}
                updateTerm={updateTerm}
            />
    )
}

export default SearchContainer;
