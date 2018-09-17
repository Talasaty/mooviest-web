import * as React from "react";
import styled from "styled-components";

const LastFilmItem = styled.div<{ img: string }>`
  flex-grow: 5;
  width: 200px;
  height: 200px;
  margin: 1px;
  padding: 20px;
  /* line-height: 200px; */
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1rem;
  text-align: justify;
  background-color: red;
  background-image: url(${p => p.img});
  background-size: 100%;
  border-radius: 4px;
  color: #fff;
  text-shadow: 1px 1px 0 #000;
`;

export class Pelicula extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { titulo, popularidad, lanzamiento, imagen } = this.props;
    const Base_url: string = "https://image.tmdb.org/t/p/";
    const File_size: string = "w500";
    const url = Base_url + File_size + imagen;
    return (
      <LastFilmItem img={url}>
          <h3>{titulo}</h3>
          <p>Fecha de estreno: {lanzamiento}</p>
          <span>Votos: {popularidad}</span>
      </LastFilmItem>
    );
  }
}
