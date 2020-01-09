import React from "preact-compat";
import { Link } from "preact-router";
import styled from "@emotion/styled";
import colors from "./colors";

// const Spin = keyframes`
//   from {
//     transform: rotate(0deg)
//   }
//   to {
//     transform: rotate(360deg)
//   }
// `;

// const SpyGlass = styled("span")`
//   display: inline-block;
//   animation: 1s ${Spin};
// `;

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  span {
    display: inline-block;
    border: 1px solid red;
    color: ${colors.secondary};
  }
`;
class NavBar extends React.Component {
  render() {
    return (
      <Container>
        <NavLink to="/">Adopt Me!</NavLink>
        <NavLink to="search-params">
          <span aria-label="search" role="img">
            Search
          </span>
        </NavLink>
      </Container>
    );
  }
}

export default NavBar;
