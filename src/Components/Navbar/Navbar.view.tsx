import * as React from "react";
import styled from "styled-components";

import img from "../../img/logo_mooviest.png";

interface StyleProps {
  hover: boolean;
}

const Logo = img;

const Logo_Navbar = styled.img`
  height: 20px;
  width: 20px;
`;

const Navbar_wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 999;
  font-size: 1.2em;
  background: rgba(95, 143, 224, 1);
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(95, 143, 224, 1)),
    color-stop(21%, rgba(95, 143, 224, 1)),
    color-stop(78%, rgba(205, 109, 169, 1)),
    color-stop(100%, rgba(205, 109, 169, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(95, 143, 224, 1) 0%,
    rgba(95, 143, 224, 1) 21%,
    rgba(205, 109, 169, 1) 78%,
    rgba(205, 109, 169, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(95, 143, 224, 1) 0%,
    rgba(95, 143, 224, 1) 21%,
    rgba(205, 109, 169, 1) 78%,
    rgba(205, 109, 169, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(95, 143, 224, 1) 0%,
    rgba(95, 143, 224, 1) 21%,
    rgba(205, 109, 169, 1) 78%,
    rgba(205, 109, 169, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(95, 143, 224, 1) 0%,
    rgba(95, 143, 224, 1) 21%,
    rgba(205, 109, 169, 1) 78%,
    rgba(205, 109, 169, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5f8fe0', endColorstr='#cd6da9', GradientType=1 );
`;

const SubNavbar_ul = styled.ul<StyleProps>`
  display: ${p => (p.hover ? "flex" : "none")};
  position: absolute;
  top: 80%;
  padding-left: 1em;
`;

const SubNavbar_li = styled.li`
  display: inline-block;
  position: relative;
  padding-right: 1em;
`;

const Navbar_ul = styled.ul`
  display: flex;
  flex-direction: row;
  position: relative;
  color: whitesmoke;
`;

// Cambiar
const Navbar_li = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 1em;
  color: white;
  &:hover {
    background-color: rgb(255, 255, 255, 0.5);
    color: black;
    border-radius: 10px;
    padding-bottom: 5px;
  }
`;

class Navbar extends React.Component {
  state = {
    rankingHover: false,
    peliculasHover: false,
    seriesHover: false
  };

  public render() {
    return (
      <div className="Navbar-wrapper">
        <Navbar_wrapper>
          <Navbar_ul>
            <div>
              <Navbar_li>
                <a href="#">
                  <Logo_Navbar src={Logo} />
                </a>
              </Navbar_li>
            </div>
            <div
              onMouseEnter={() => this.setState({ rankingHover: true })}
              onMouseLeave={() => this.setState({ rankingHover: false })}
            >
              <Navbar_li>Ranking</Navbar_li>
              <SubNavbar_ul hover={this.state.rankingHover}>
                <SubNavbar_li>Ranking 1</SubNavbar_li>
                <SubNavbar_li>Ranking 2</SubNavbar_li>
              </SubNavbar_ul>
            </div>
            <div
              onMouseEnter={() => this.setState({ peliculasHover: true })}
              onMouseLeave={() => this.setState({ peliculasHover: false })}
            >
              <Navbar_li>Películas</Navbar_li>
              <SubNavbar_ul hover={this.state.peliculasHover}>
                <SubNavbar_li>Pelicula 1</SubNavbar_li>
                <SubNavbar_li>Pelicula 2</SubNavbar_li>
              </SubNavbar_ul>
            </div>
            <div
              onMouseEnter={() => this.setState({ seriesHover: true })}
              onMouseLeave={() => this.setState({ seriesHover: false })}
            >
              <Navbar_li>Series</Navbar_li>
              <SubNavbar_ul hover={this.state.seriesHover}>
                <SubNavbar_li>Serie 1</SubNavbar_li>
                <SubNavbar_li>Serie 2</SubNavbar_li>
              </SubNavbar_ul>
            </div>
          </Navbar_ul>
        </Navbar_wrapper>
      </div>
    );
  }
}

export default Navbar;
