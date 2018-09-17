import * as React from 'react';
//import Header from './Components/Header/Header.view';


//import Search from './Components/Search/Search.view';
import ButtonModal from './Components/ButtonModal/ButtonModal';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ButtonModal/>
        <Header/>
      </div>
    );
  }
}
export default App;