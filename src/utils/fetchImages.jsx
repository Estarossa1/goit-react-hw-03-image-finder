import axios from "axios";

export const fetchImages = async (query, page) => {
    const API_KEY = '38099070-d6784a36be88a44508e245bdc';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    try {
      const response = await axios.get(url);
      return response.data.hits;
    } catch (error) {
      throw new Error(error.message);
    }
  };