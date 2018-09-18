import * as React from 'react';

import ButtonModal from './Components/ButtonModal/ButtonModal';
import Header from "./Components/Header/Header.view";
import LastFilmList from "./Components/LastFilmList/LastFilmList.view";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ButtonModal/>
        <Header/>
        <LastFilmList />
      </div>
    );
  }
}
export default App;
