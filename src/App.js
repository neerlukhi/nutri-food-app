import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddFoodDetails from './components/AddFoodDetails/AddFoodDetails';
import ViewFoodProduct from './components/ViewFoodProduct/ViewFoodProduct';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={ <AddFoodDetails/> } />
      <Route path='/view' element={<ViewFoodProduct/>} />
      </Routes>
    </>
  );
}

export default App;
