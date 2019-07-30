import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from 'Components/Section'
import Loader from '../../Components/Loader';
import Helmet from 'react-helmet';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({upcoming, popular, nowPlaying, loading, error}) => (
    
    <>
    <Helmet>
        <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
        <Loader/> 
    ) : (
    // ES6 형태
    // var HomePresenter = function() {
    // }
    // console.log(upcoming, popular, nowPlaying, loading, error)
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
                {nowPlaying.map(movie => (
                    // <span key={movie.id}>{movie.title}</span>
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        // title={movie.original_title}
                        // 영문
                        title={movie.title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0, 4)}
                        // substring 을 이용하여 원하는 만큼의 길이를 자른다.
                        // 년도만 가져오면 되니까
                        isMovie={true}
                    />
            ))}
            </Section>
        )}
        {/* 주석:
            nowPlaying.map(movie => movie.title)
            movie라는 이름을 지어주고 movie에서 title을 뺴오자
        */}
        {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming">
                {upcoming.map(movie => (
                    // <span key={movie.id}>{movie.title}</span>
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0, 4)}
                        // substring 을 이용하여 원하는 만큼의 길이를 자른다.
                        // 년도만 가져오면 되니까
                        isMovie={true}
                    />
            ))}
            </Section>
        )}
        {popular && popular.length > 0 && (
            <Section title="Popular movies">
                {popular.map(movie => (
                    // <span key={movie.id}>{movie.title}</span>
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0, 4)}
                        // substring 을 이용하여 원하는 만큼의 길이를 자른다.
                        // 년도만 가져오면 되니까
                        isMovie={true}
                    />
            ))}
            </Section>
        )}
        {error && <Message color="#e74c3c" text={error}/>}
    </Container>
    )}
    </>
);
 

HomePresenter.propTypes = {
    upcoming: PropTypes.array, 
    popular: PropTypes.array, 
    nowPlaying: PropTypes.array, 
    loading: PropTypes.bool.isRequired, 
    error: PropTypes.string
};

export default HomePresenter;
