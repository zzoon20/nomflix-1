import React from 'react';
import DetailPresenter  from './DetailPresenter';
import { moviesApi, tvApi } from 'api';
// api 에서 moviesApi 라는 객체를 가져오니까 {} 안에 써줘야 객체

export default class extends React.Component {

    // constructor 라는 함수를 재정의 : 재정의할 때는 (){}
    // 생성자 : 재정의만 안햇을 뿐이지, 원래 모든 클래스들은 존재하고 실행됨.
    constructor(props){
        // props 로 주고받음
        super(props);
        // console.log(props);
        const { location: {pathname} } = props;
        //왼쪽: location 에 들어가면 pathname이 있는데 그걸 가져와
        //오른쪽: props에서 가져와야 하니까
        // 왼쪽은 가져올거를 써주고 = 오른쪽은 어디에서 가져올지 써줌

        // const { } = 객체;
        // console.log(id);

        // constructor 를 쓸 때는 밖에 state 값을 따로 쓰지 않고 안에 같이 적어준다.
        this.state = { 
            result: null,
            loading: true,
            error: null,
            isMovie: ( pathname.includes("movie") )
            // include 자체가 true, false를 알아서 구분
        };
    }
    
    async componentDidMount() {
        const { match: { params : { id } } } = this.props;
        // const result = await moviesApi.movieDetail(id);
        if ( this.state.isMovie ){
            const result = await moviesApi.movieDetail(id);
            this.setState({result : result.data, loading: false});
        } else {
            const result = await tvApi.showDetail(id);
            this.setState({result : result.data, loading: false});
        }
        // result 라는 변수에 moviesApi의 movieDetail 의 id 값을 가져옴 넣는거지
        
        // this.setState({result});
        
        // console.log(result)

    }



    render(){
        // console.log(this.state);
        const { result, error, loading, isMovie } = this.state;
        return <DetailPresenter 
                result={result} 
                error={error}
                loading={loading}
                isMovie={isMovie}
                />
    }

}

