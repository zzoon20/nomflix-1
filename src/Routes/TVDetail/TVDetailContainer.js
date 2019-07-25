import React from 'react';
import TVDetailPresenter from './TVDetailPresenter';
import {tvApi} from 'api';


export default class extends React.Component{

    constructor(){
        super();
        this.state = {
            result: null,
            loading: true,
            error: null
        }
    }

    async componentDidMount(){
        // console.log(this.props)
        // const { match: {params: {id}} }= this.props
        // console.log(id)
        // tvApi.showDetail(id);
        // const result = await tvApi.showDetail(id);
        // api 부르면 항상 기다려야죠
        // console.log(result);
        // const {data} = await tvApi.showDetail(id);
        // const {data : result} = await tvApi.showDetail(id);
        // console.log(result);
        // this.setState({result : result});
        // this.setState({result});
        // 왼쪽은 바꿀대상 : 바꿀이름
        try{
            const { match: {params: {id}} }= this.props
            const {data : result} = await tvApi.showDetail(id);
            this.setState({result});
        }catch{
            this.setState( {error: "Can't find"} );
        }finally{
            this.setState( {loading : false} );
        }
    }


    render() {
        console.log(this.state)
        const {result, loading, error} = this.state
        return(
            <TVDetailPresenter
                result={result}
                loading={loading}
                error={error}
            />
        )
    }
};