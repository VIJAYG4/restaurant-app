import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faSearchLocation,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import RestaurantList from "./Components/RestaurantList";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null,
      isFavorite: false,
      favResults: []
    };
  }

  onFormSubmit = searchLocationQuery => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          title="Restaurants List"
          tagline="Find the perfect spot for your next weekend lunch."
        />
        <SearchForm onFormSubmit={this.onFormSubmit} />
        {this.state.isFavorite ? (
          <RestaurantList
            isFavorite={this.state.isFavorite}
            favResults={this.state.favResults}
          />
        ) : (
          <RestaurantList
            isFavorite={this.state.isFavorite}
            favResults={this.state.favResults}
            searchLocationQuery={this.state.searchLocationQuery}
          />
        )}
        <Footer
          message="Built with lots of love &hearts; by Vijay"
          thanks=""
          copyright=""
        />
        <button
          onClick={() => this.setState({ isFavorite: !this.state.isFavorite })}
        >
          Favorite
        </button>
      </div>
    );
  }
}

library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt);

export default App;

// <Footer />
