import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';

import Main from './pages/6_0_main_page/Main';
import Borsch from './pages/6_1_borsch_page/Borsch';
import Pancakes from './pages/6_2_pancakes_page/Pancakes';
import Pilaf from './pages/6_3_pilaf_page/Pilaf';


import './bootstrapStyle/bootstrap.min.css';
import './pages/6_0_main_page/customStyleMain.css';
import './App.css';

import './pages/6_1_borsch_page/customStyleBorsch.css';
import './pages/6_2_pancakes_page/customStylePancakes.css';
import './pages/6_3_pilaf_page/customStylePilaf.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Borsch' element={<Borsch />} />
          <Route path='/Pancakes' element={<Pancakes />} />
          <Route path='/Pilaf' element={<Pilaf />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
