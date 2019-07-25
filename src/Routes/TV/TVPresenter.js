import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Helmet from 'react-helmet';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({topRated, popular, airingToday, loading, error}) => (
    <>
    <Helmet>
        <title>TV shows | Nomflix</title>
    </Helmet>
    {loading ? (
        <Loader /> 
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {topRated.map(show => (
                        // <span key={show.id}>{show.name}</span>
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0, 4)}
                            // substring 을 이용하여 원하는 만큼의 길이를 자른다.
                            // 년도만 가져오면 되니까
                        />
                    ))}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="Airing Today">
                    {airingToday.map(show => (
                        // <span key={show.id}>{show.name}</span>
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0, 4)}
                            // substring 을 이용하여 원하는 만큼의 길이를 자른다.
                            // 년도만 가져오면 되니까
                        />
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular TV">
                    {popular.map(show => (
                        // <span key={show.id}>{show.name}</span>
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0, 4)}
                            // substring 을 이용하여 원하는 만큼의 길이를 자른다.
                            // 년도만 가져오면 되니까
                        />
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error}/>}
        </Container>
        )}
    </>
);


TVPresenter.propTypes = {
    topRated: PropTypes.array, 
    popular: PropTypes.array, 
    airingToday: PropTypes.array, 
    loading: PropTypes.bool.isRequired, 
    error: PropTypes.string
}

export default TVPresenter;
