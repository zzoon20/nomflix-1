import HomePresenter from './HomePresenter'
import React from 'react'
import {moviesApi} from 'api'

class HomeContainer extends React.Component {

    state = {
        upcoming : null,
        nowPlaying : null,
        popular : null,
        loading : true,
        error : null
    }

    async componentDidMount() {

        try {
            const upcoming = await moviesApi.upcoming()
            const nowPlaying = await moviesApi.nowPlaying()
            const popular = await moviesApi.popular()
            this.setState({
                upcoming : upcoming.data.results,
                nowPlaying : nowPlaying.data.results,
                popular: popular.data.results
            })
        }catch {
            this.setState({
                error : "cant't find"
            })
        }finally{
            // (try, catcth 실행하고 마지막에 무조건 finally 실행해)
            this.setState({
                loading : false
            })
        }
    }



    render() {
        // console.log(this.state);
        
        const {upcoming, popular, nowPlaying, loading, error} = this.state

        return (
            <HomePresenter 
                upcoming={upcoming}
                popular={popular}
                nowPlaying={nowPlaying}
                loading={loading}
                error={error}
            />
        )
    }
}

export default HomeContainer;


