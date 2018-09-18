import * as React from "react";
import styled from "styled-components";
import ButtonModal from '../ButtonModal/ButtonModal';

interface StyleProps {
  hover: boolean;
}


const Navbar_wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  padding-left: 35px;
  font-size: 1.2em;
  background: rgba(148, 0, 20, 1);
  background: -moz-linear-gradient(
    left,
    rgba(148, 0, 20, 1) 0%,
    rgba(191, 3, 28, 1) 58%,
    rgba(231, 4, 34, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(148, 0, 20, 1)),
    color-stop(58%, rgba(191, 3, 28, 1)),
    color-stop(100%, rgba(231, 4, 34, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(148, 0, 20, 1) 0%,
    rgba(191, 3, 28, 1) 58%,
    rgba(231, 4, 34, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(148, 0, 20, 1) 0%,
    rgba(191, 3, 28, 1) 58%,
    rgba(231, 4, 34, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(148, 0, 20, 1) 0%,
    rgba(191, 3, 28, 1) 58%,
    rgba(231, 4, 34, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(148, 0, 20, 1) 0%,
    rgba(191, 3, 28, 1) 58%,
    rgba(231, 4, 34, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#940014', endColorstr='#e70422', GradientType=1 );
`;

const SubNavbar_ul = styled.ul<StyleProps>`
  display: ${p => (p.hover ? "flex" : "none")};
  position: absolute;
  top: 80%;
  padding-left: 1em;
  font-family: 'Courier New', Courier, monospace
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
  font-family: 'Montserrat', sans-serif;
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

const Navbar_logo = styled.p`
  font-family: pacifico;
  font-weight: 400;
  font-size: 2em;
  color: rgb(255, 255, 255);
  margin: 15px;
  padding: 0;
  align-content: center;
  float: left;
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
      <ButtonModal/>
        <Navbar_wrapper>
          <div>
            <Navbar_logo>M</Navbar_logo>
          </div>
          <Navbar_ul>
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