import React, { Component } from 'react';
import { connect } from 'react-redux';

class Joke extends Component {
  render() {
    console.log(this.props.jokes)
    if (this.props.jokes.length === 0) return <h2>Pesquise por uma piada</h2>
    if (this.props.loading) return <h2>Carregando...</h2>
    return (
      <div>
        {this.props.jokes.map((joke) => <h3>{joke.joke}</h3>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  jokes: state.jokesReducer.jokes,
  loading: state.jokesReducer.loading,
})

export default connect(mapStateToProps)(Joke);
