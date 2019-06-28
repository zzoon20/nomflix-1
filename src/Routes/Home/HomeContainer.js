import HomePresenter from './HomePresenter'
import React from 'react'
import {moviesApi} from 'api'


class HomeContainer extends React.Component {

    state = {
        upcoming : null,
        loading : true,
        error : null
    }

    async componentDidMount() {

        try {
            const upcoming = await moviesApi.upcoming()
            this.setState({
                upcoming : upcoming.data.results
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
        return (
            <HomePresenter/>
        )
    }
}

export default HomeContainer;


