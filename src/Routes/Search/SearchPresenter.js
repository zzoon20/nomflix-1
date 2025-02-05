import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import { SearchContext } from 'context';

const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%
`;

const SearchPresenter = ({
    loading,
    handleSubmit,
    error,
    updateTerm
  }) => {
    const { search: { searchTerm, movieResults, tvResults } } = useContext(SearchContext);
    return (
      <Container>
        <Helmet>
          <title>Search | Nomflix</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Search Movies or TV Shows..."
            value={searchTerm}
            onChange={updateTerm}
          />
        </Form>
        {loading ? (
          <Loader />
        ) : (
          <>
            {movieResults && movieResults.length > 0 && (
              <Section title="Movie Results">
                {movieResults.map(movie => (
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
            {tvResults && tvResults.length > 0 && (
              <Section title="TV Show Results">
                {tvResults.map(show => (
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
            {error && <Message color="#e74c3c" text={error} />}
            {tvResults &&
              movieResults &&
              tvResults.length === 0 &&
              movieResults.length === 0 && (
                <Message text="Nothing found" color="#95a5a6" />
              )}
          </>
        )}
      </Container>
    )
  }

SearchPresenter.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;