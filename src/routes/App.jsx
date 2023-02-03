import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from '@containers/layout.jsx';
import Home from '@pages/index.jsx';
import NotFound from '@pages/NotFound.jsx';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState'; 
import Profile from '@components/Profile';
import DiplomaContainer from '../pages/DiplomaContainer';
import MainPage from '@containers/mainpage.jsx';

import '@styles/global.scss';

const App = () => {
    const initialState = useInitialState();
    return ( 
        <AppContext.Provider value ={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                       
                       <Route path="/mainpage" element={<MainPage/>} /> 
                       <Route path="/profile" element={<Profile/>} /> 
                       <Route path="/DiplomaContainer" element={<DiplomaContainer/>}/>
                       <Route path="/" element={<Home/>} />
                       <Route path="*" element={<NotFound/>} />       
                    </Routes> 
                </Layout>       
            </BrowserRouter>
        </AppContext.Provider>    
    );
};

export default App;



