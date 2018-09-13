import * as React from 'react';

import Header from './Components/Header/Header.view';

import Search from './Components/Search/Search.view';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
      </div>
    );
  }
}
export default App;
