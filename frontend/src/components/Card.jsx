import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="flex-col max-h-[94.5%] opacity-0 group-hover:opacity-95 transition-all duration-200 absolute bottom-0 left-0 right-0 bg-slate-950/85 backdrop-blur-md m-2 p-4 rounded-md">
      <p className="text-white text-base overflow-y-auto prompt">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-gradient-to-br from-pink-500 to-violet-600 flex justify-center items-center text-white text-base font-extrabold">{name[0]}</div>
          <p className="text-white text-sm">{name}</p>
        </div>
        <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none rounded-full bg-pink-500 hover:bg-pink-600 border-none">
          <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
        </button>
      </div>
    </div>
  </div>
);

export default Card;
