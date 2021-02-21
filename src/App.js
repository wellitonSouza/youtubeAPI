
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import SeachrBar from './componentes/SearchBar'
import VideoList from './componentes/VideoList';
import VideoPlayer from './componentes/VideoPlayer';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SeachrBar/>
        <VideoList/>
        <VideoPlayer/>
      </div>
    </Provider>
  );
}

export default App;
