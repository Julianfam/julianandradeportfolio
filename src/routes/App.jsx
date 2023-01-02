import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from '@containers/layout.jsx';
import Home from '@pages/Home.jsx';

import NotFound from '@pages/NotFound.jsx';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState'; 
import '@styles/global.scss';
import Profile from '@components/Profile';

const App = () => {
    const initialState = useInitialState();
    return ( 
        <AppContext.Provider value ={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route path="/profile" element={<Profile/>} /> 
                    <Route path="*" element={<NotFound/>} /> 
                </Routes> 
                </Layout>       
            </BrowserRouter>
        </AppContext.Provider>    
    );
};

export default App;

