import * as React from "react";
import styled from "styled-components";
// import LasFilmPresenter from "./LastFilm.presenter";
import getData from "./LastFilm.presenter";

// const LastFilmContent = styled.div`
//   display: block;
// `;

const Lastfilmdiv = styled.div`
  position: relative;
  display: flex;
  margin: auto 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

const LastFilmItem = styled.div`
  flex-grow: 5;
  width: 200px;
  height: 200px;
  margin: 10px;
  line-height: 200px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.8rem;
  text-align: center;
  background-color: red;
  border-radius: 4px;
`;

class LastFilm extends React.Component {
  state = {
    listadoPeliculas: []
  };
  componentDidMount() {
    getData().then(response => {
      this.setState({ listarPeliculas: response });
    });
  }

  public render() {
    const Peliculas = this.state.listadoPeliculas;
    const ListadoPeliculas = Peliculas.map(pelicula => {
      <LastFilmItem />;
    });
    return (
      // <LastFilmContent>
      <Lastfilmdiv>
        {ListadoPeliculas}
        <LastFilmItem>Box 1</LastFilmItem>
        <LastFilmItem>Box 2</LastFilmItem>
        <LastFilmItem>Box 3</LastFilmItem>
        <LastFilmItem>Box 4</LastFilmItem>
        <LastFilmItem>Box 5</LastFilmItem>
        <LastFilmItem>Box 6</LastFilmItem>
        <LastFilmItem>Box 7</LastFilmItem>
      </Lastfilmdiv>
      // </LastFilmContent>
    );
  }
}

export default LastFilm;
