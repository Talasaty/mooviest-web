import * as React from 'react';

import Header from './Components/Header/Header.view';

import Search from './Componentes/Search/Search.view';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search/>
      </div>
    );
  }
}
export default App;
