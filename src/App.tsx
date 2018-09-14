import * as React from 'react';

import Header from './Components/Header/Header.view';

import Search from './Components/Search/Search.view';
import LastFilm from './Components/LastFilm/LastFilm.view';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <LastFilm/>

      </div>
    );
  }
}
export default App;