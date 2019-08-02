import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
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

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span`

`;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size: 12px;
    opcacity: 0.7;
    line-height: 1.5;
    width: 50%;
    margin-bottom: 20px;
`;

const Imdb = styled.img`
    width: 25px;
    height: 15px;
    margin: -2px 0 0 10px;
    display: inline-block;
    vertical-align: middle;
`;

const ProductCompany = styled.img`
    width: 125px;

`;

const SeasonPoster = styled.img`
    width: 80px;
`;

const SeasonList = styled.div`
    
`;

const DetailPresenter = ({ result, loading, error }) =>(
    <>
    <Helmet><title>Loading...</title></Helmet>
    {loading ? (
        <Loader/>
    ) : (
    <Container>
        <Helmet>
            <title>{result.original_title 
                ? result.original_title 
                : result.original_name}
            </title>
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
                    {/* {result.original_title 
                        ? result.original_title 
                        : result.original_name} */}
                    {/* {영문} */}
                    {result.title 
                        ? result.title 
                        : result.name}
                    {/*
                        오리지널 타이틀이 있는지 확인해봐
                        있으면 오리지널 타이틀(movie)넣고
                        없으면 오리지널 네임(tv show)을 넣어
                        조건 ? true : false 
                    */}
                </Title>
                <ItemContainer>
                    <Item>
                        {result.release_date 
                            ? result.release_date.substring(0,4) 
                            : result.first_air_date.substring(0,4)}
                    </Item>
                    <Divider>·</Divider>
                    <Item>
                        {result.runtime ? result.runtime : 
                            result.episode_run_time ? result.episode_run_time[0] : '-'} min
                        {/*
                            조건 ? 참 : 거짓(조건 ? 참 : 거짓) min
                        */}
                    </Item>
                    <Divider>·</Divider>
                    <Item>
                        {result.genres && 
                            result.genres.map((genre, index) => 
                                index === result.genres.length - 1 
                                    ? genre.name 
                                    : `${genre.name}/`
                        )}
                    </Item>
                    <Item>
                        {result.imdb_id ? 
                            <a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank" rel="noopener noreferrer">
                                <Imdb src={require('../../assets/imdb.svg')}/>
                            </a>
                            : null
                        }
                    </Item>
                </ItemContainer>
                <Overview>
                    {result.overview}
                </Overview>
                <Section>
                    
                </Section>
                <Section title="Product Company">
                    {result.production_companies && 
                        result.production_companies.map((company, index) => 
                            company.logo_path
                            ?
                            <ProductCompany
                                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                key={company.id} 
                                alt={company.name}
                            />
                            : <Item>{company.name}</Item>
                        )
                    }
                </Section>
                {result.seasons &&
                    result.seasons ? 
                        <Section title="Seasons">
                            {result.seasons && 
                                result.seasons.map((season ,index) =>
                                season.poster_path
                                ?
                                <SeasonList>
                                    <SeasonPoster
                                        src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                                    /><br/>
                                    <Item>{season.name}</Item>
                                </SeasonList>
                                : <Item>{season.name}</Item>
                                )
                            }
                        </Section>
                    :
                    null
                }
                {result.belongs_to_collection &&
                    result.belongs_to_collection ? 
                    <Link to={`/collections/${result.belongs_to_collection.id}`}>
                        <Section title="Collections">
                            {result.belongs_to_collection && 
                                result.belongs_to_collection.poster_path
                                ?
                                <SeasonList>
                                    <SeasonPoster
                                        src={`https://image.tmdb.org/t/p/w200${result.belongs_to_collection.poster_path}`}
                                    /><br/>
                                    <Item>{result.belongs_to_collection.name}</Item>
                                </SeasonList>
                                : <Item>{result.belongs_to_collection.name}</Item>
                            }
                        </Section>
                    </Link>
                    :
                    null
                }
            </Data>
        </Content>
    </Container>
    )}
    </>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default DetailPresenter;