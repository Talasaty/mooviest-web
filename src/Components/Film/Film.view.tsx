import * as React from "react";
import styled from "styled-components";
// import LastFilmList from "../LastFilmList/LastFilmList.view";

const LastFilmItem = styled.div<{ img: string }>`
  flex-grow: 5;
  width: 200px;
  height: 200px;
  margin: 1px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1rem;
  text-align: justify;
  background-color: red;
  background-image: url(${p => p.img});
  background-size: 100%;
  border-radius: 4px;
`;
const LastFilmText = styled.div`
  text-align: center;
  vertical-align: middle;
  opacity: 0;
  background-size: 200px 200px;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 2px 0% 0% 0%;
  &:hover {
    opacity: 0.7;
    color: black
    background-color: white;
  }
`;
// const LastFilmTextH3 = styled.h3`
//   margin: 0;
// `;

export class Pelicula extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {
      titulo,
      popularidad,
      lanzamiento,
      imagen,
      descripcion
    } = this.props;
    const Base_url: string = "https://image.tmdb.org/t/p/";
    const File_size: string = "w500";
    const url = Base_url + File_size + imagen;
    return (
      <LastFilmItem img={url}>
        <LastFilmText>
          <h3>{titulo}</h3>
          <h5>Release: {lanzamiento}</h5>
          <h5>Popularity: {popularidad}</h5>
          <h5>
            Overview: {descripcion}
            ...
          </h5>
        </LastFilmText>
      </LastFilmItem>
    );
  }
}
