import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jokeThunk } from '../actions';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      pesquisa: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form>
        <input name="pesquisa" placeholder='Termo da Piada' onChange={(e) => this.handleChange(e)}/>
        <button type="button" onClick={() => this.props.getJoke(this.state.pesquisa)}>Pesquisar</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getJoke: (payload) => dispatch(jokeThunk(payload))
});

export default connect(null, mapDispatchToProps)(SearchBar);
