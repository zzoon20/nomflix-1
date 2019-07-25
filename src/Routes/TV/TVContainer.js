import TVPresenter from './TVPresenter'
import React from 'react'
import {tvApi} from 'api'

class TVContainer extends React.Component {

    state = {
        topRated : null,
        popular: null,
        airingToday: null,
        error : null,
        loading : true
    };

    async componentDidMount (){
        try{
            const topRated = await tvApi.topRated()
            const popular = await tvApi.popular()
            const airingToday = await tvApi.airingToday()
            this.setState({
                topRated : topRated.data.results,
                popular : popular.data.results,
                airingToday : airingToday.data.results
            })
        }catch{
            this.setState({
                error : "can't find TV information"
            })
        }finally{
            this.setState({
                loading : false
            })
        }

    }

    render(){
        // console.log(this.state);
        
        const {topRated, popular, airingToday, loading, error} = this.state

        return (
            <TVPresenter 
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        )
    }
}

export default TVContainer;