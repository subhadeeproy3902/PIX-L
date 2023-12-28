import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { pixl } from './assets';
import { Home, CreatePost } from './pages';
import { Footer } from './components';

const App = () => (
  <BrowserRouter>
    <div className='bg-gradient-to-b from-purple-300/30 to-pink-400/30 '>
      <header className="sticky top-0 z-30 backdrop-blur-xl w-full flex justify-between items-center sm:px-8 px-4 py-2 border-b border-b-violet-600" style={{ background: "rgba( 153, 0, 255, 0.10 )" }}>
        <Link to="/" className='flex justify-center items-center'>
          <img src={pixl} alt="logo" className="w-12 rounded-full object-contain" />
          <h2 className="text-2xl pl-1 font-bold tracking-tight">Pix-L</h2>
        </Link>


        <Link to="/create-post" className="font-inter font-medium bg-purple-500 text-white hover:bg-purple-600 duration-200 ease-in-out px-4 py-2 rounded-md">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full justify-center items-center flex min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
