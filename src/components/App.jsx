import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'utils/fetchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppStyled } from './App.styled';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    query: '',
    isLoading: false,
    selectedImage: null,
    totalCount: 0,
  };

  galleryRef = null;

  componentDidMount() {
    this.galleryRef = React.createRef();
  }

  handleSearchSubmit = async query => {
    this.setState(
      {
        images: [],
        currentPage: 1,
        query,
        isLoading: true,
      },
      async () => {
        try {
          const image = await fetchImages(query, 1);

          if (images.length === 0 && images.length <= 12) {
            this.setState({ isLoading: false });
            this.notify('No images found.', this.state.totalCount)
          } else {
            const totalCount = this.state.images.length;
            this.notify('Loaded first images.', totalCount + images.length);
          }
          this.setState({ images });
        } catch (error) {
          this.notify('Invalid request.', this.state.totalCount);
          this.setState({ error: error.message });
        }
        this.setState ({ isLoading: false });
      }
    );
  };

  handleLoadMore = async () => {
    const { currentPage, query, images } = this.state;
    const nextPage = currentPage + 1;
  }
}