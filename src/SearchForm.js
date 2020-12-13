import React, { Component } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchCategory: "comics",
      searchQuery: "",
      searchResults: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("search form: " + this.state.searchQuery);
    console.log(this.state.searchCategory);
    let query = this.state.searchQuery;
    let cat = this.state.searchCategory;
    this.props.parentCallback(query, cat);
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit} className="SearchForm">
        <FormGroup controlId="formControlsSelect">
          <FormControl
            type="text"
            value={this.state.searchQuery}
            onChange={(event) =>
              this.setState({ searchQuery: event.target.value })
            }
            placeholder="Enter Search"
            required
          />{" "}
          <FormControl
            componentClass="select"
            value={this.state.searchCategory}
            onChange={(event) =>
              this.setState({ searchCategory: event.target.value })
            }
            placeholder="Select a search category"
          >
            <option value="comics">Comic Title</option>
            <option value="characters">Character</option>
            <option value="series">Series</option>
          </FormControl>
        </FormGroup>{" "}
        <Button bsStyle="primary" bsSize="small" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}
export default SearchForm;
