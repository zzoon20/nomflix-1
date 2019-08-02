import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Poster from 'Components/Poster';
// import Section from 'Components/Section';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h3`
    font-size: 32px;
`;

const Overview = styled.p`
    font-size: 12px;
    opcacity: 0.7;
    line-height: 1.5;
    width: 50%;
    margin-bottom: 20px;
`;

const CollectionsPresenter = ({ result, loading, error }) =>(
    <>
    <Helmet><title>Loading...</title></Helmet>
    {loading ? (
        <Loader/>
    ) : (
    <Container>
        <Helmet>
            <title>{result.name}</title>
        </Helmet>
        <Backdrop 
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
        <Content>
            <Cover 
                bgImage={
                    result.poster_path 
                    ? `https://image.tmdb.org/t/p/original${result.poster_path}` 
                    : require("../../assets/noPosterSmall.png")
                }
            />
            <Data>
                <Title>
                    {result.name}
                </Title>
                <Overview>
                    {result.overview}
                </Overview>
                {result.parts && result.parts.length > 0 && (
                    <Section title="Parts">
                        {result.parts.map(movie => (
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
            </Data>
        </Content>
    </Container>
    )}
    </>
    );

CollectionsPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default CollectionsPresenter;