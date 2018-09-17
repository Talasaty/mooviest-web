import * as React from 'react';

import Header from './Components/Header/Header.view';

import Search from './Components/Search/Search.view';
import LastFilmList from './Components/LastFilmList/LastFilmList.view';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <LastFilmList/>

      </div>
    );
  }
}
export default App;