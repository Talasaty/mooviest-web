import * as React from "react";
import styled from "styled-components";

import getData from "./LastFilmList.presenter";
import { Pelicula } from "../Film/Film.view";

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
const TituloLastFilm = styled.h2`
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

class LastFilmList extends React.Component {
  state = {
    listadoPeliculas: []
  };
  componentDidMount() {
    getData().then(response => {
      this.setState({ listadoPeliculas: response });
    });
  }

  public render() {
    return (
      <div>
        <TituloLastFilm>Las 10 Más Votadas</TituloLastFilm>
        <Lastfilmdiv>
          {this.state.listadoPeliculas.map((pelicula: any) => {
            return (
              <Pelicula
                key={pelicula.id}
                titulo={pelicula.title}
                popularidad={pelicula.popularity}
                lanzamiento={pelicula.release_date}
                imagen={pelicula.poster_path}
              />
            );
          })}
        </Lastfilmdiv>
      </div>
    );
  }
}

export default LastFilmList;
