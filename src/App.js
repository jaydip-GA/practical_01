import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import TableData from './Components/TableData';
import PageDetails from './Components/PageDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/tableData' component={TableData} />
        <Route exact path='/infoData' component={PageDetails} />
        <Redirect from='' to='/tableData' />
      </Switch>
    </div>
  );
}

export default App;
