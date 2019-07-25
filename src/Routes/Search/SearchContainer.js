import React from 'react'
import SearchPresenter from './SearchPresenter'
import {moviesApi, tvApi} from 'api'


export default class extends React.Component {
    state = {
        movieResults :null,
        tvResults : null,
        searchTerm : "",
        loading : false,
        error : null
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    };

    updateTerm = (event) => {
        // console.log(event)
        const {
            target: { value }
        } = event;
        // console.log(value);
        this.setState({
            searchTerm: value
        });
    };

    // componentDidMount(){
    //     this.handleSubmit();
    // }

    searchByTerm = async () => {
        // const searchTerm = this.state.searchTerm
        const { searchTerm } = this.state; // 왼쪽에는 쓰고싶은거를 가져오고 오른쪽은 this.state전체를 가져옴 
        //const movieResults = await moviesApi.search(searchTerm) //searchTerm 이라는 param을 받아옴
        // console.log(movieResults)
        // data 안에 results를 movieResults 로 이름을 바꿔줌
        // this.setState({
            // movieResults
            // movieResults : movieResults  왼쪽은 상단의 state값을 바꾸려는거고, 오른쪽은 
            // 바로 윗줄의 movieResults 값을 가져오는건데
            // 이름이 같으니까 한번만 써준다
        // }) 
        this.setState({ loading: true});
        try {
            // throw Error(); // 에러 던져줄 때 
            const { data : {results : movieResults} } = await moviesApi.search(searchTerm)
            const { data : {results : tvResults} } = await tvApi.search(searchTerm)
            this.setState({ movieResults, tvResults })
        } catch {
            this.setState({ error: "Can't find results" })
        } finally {
            this.setState({ loading: false });
        }
    };


    render() {
        // console.log(this.state);
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                loading={loading}
                error={error}
                searchTerm={searchTerm}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}





