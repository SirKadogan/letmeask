import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import Home from './pages/Home';
import AdminRoom from './pages/AdminRoom';
import NewRoom from './pages/NewRoom';
import Room from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/rooms/new' exact component={NewRoom}/>
          <Route path='/rooms/:id'component={Room}/>
          <Route path='/admin/rooms/:id'component={AdminRoom}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
