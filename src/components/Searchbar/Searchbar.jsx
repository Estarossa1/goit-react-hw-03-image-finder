import { Component } from 'react';
import { SearchbarStyled } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleCange = event => {
    this.setState({ query: event.curentTurget.value.toLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Please input tag for searching images');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarStyled>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span className="button-label">Search</span>
          </button>

          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </SearchbarStyled>
    );
  }
}

Searchbar.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};