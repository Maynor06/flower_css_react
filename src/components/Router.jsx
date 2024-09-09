import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portada from './Portada';
import { Flower } from './Flower';

const RouterComponent = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Portada/>} />
                <Route path='/Flower' element={<Flower/>} /> 
           </Routes>
        </BrowserRouter>

    )
}

export default RouterComponent