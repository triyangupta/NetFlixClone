import Body from './components/Body';
import MovieDialog from './components/MovieDialog';
import './index.css'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="">
      <Body/>
      <Toaster/>
      <MovieDialog/>
    </div>
  );
}

export default App;
