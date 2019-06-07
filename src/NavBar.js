import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

const Container = styled("header")`
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 10;
`;

class NavBar extends React.Component {
  render() {
    return (
      <Container>
        <Link to="/">Adopt Me!</Link>
        <Link to="search-params">
          <span aria-label="search" role="img">
            Search
          </span>
        </Link>
      </Container>
    );
  }
}

export default NavBar;
