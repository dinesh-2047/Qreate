import React from 'react';
import { ThemeContext, ThemeContextType } from '../../contexts/Themeprovider';

import img from '/qr.png';
import img1 from '/qr1.png';
import img2 from '/qr2.png';
import img3 from '/qr3.png';

export default function QrCodes() {
  const { theme }: ThemeContextType =
    React.useContext<ThemeContextType>(ThemeContext);

  return (
    <div className={`${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div
        className={`container mx-auto px-6 max-w-6xl ${
          theme === 'dark'
            ? 'bg-slate-900 text-slate-100'
            : 'bg-slate-50 text-slate-900'
        }`}
      >
        <h2
          className={`text-3xl font-bold text-center  mb-8 ${
            theme === 'dark' ? 'text-slate-100' : 'text-black'
          }`}
        >
          About QR Codes
        </h2>

        <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
          <div className='about-text md:w-1/2 text-center md:text-left'>
            <p className='text-lg mb-4'>
              QR codes (Quick Response codes) are two-dimensional barcodes that
              store information in a visual format. They can hold a variety of
              data types, including URLs, text, or even contact information. QR
              codes are widely used in advertising, product tracking, event
              tickets, and more!
            </p>
            <p className='text-lg'>
              Our QR code generator makes it easy to create your own custom QR
              codes for free. Simply input your desired information, and within
              seconds, you'll have a scannable QR code ready to share!
            </p>
          </div>
          <div className='about-image md:w-1/2 flex justify-center'>
            <img
              src={img}
              alt='QR Code Example'
              className='w-60 rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>

      <div
        className={`container mx-auto px-6 max-w-6xl ${
          theme === 'dark'
            ? 'bg-slate-900 text-slate-100'
            : 'bg-slate-50 text-slate-900'
        }`}
      >
        <h2 className='text-3xl font-bold text-center mb-8'>How It Works</h2>
        <div className='flex flex-col md:flex-row justify-center gap-8'>
          <div className='step md:w-1/3 text-center flex flex-col items-center'>
            <img
              src={img1}
              alt='Step 1'
              className='w-40 h-40 object-contain mb-4'
            />
            <h3 className='text-xl font-semibold mb-2'>Enter Your Data</h3>
            <p className=' max-w-xs'>
              Provide the text, URL, or information you want to encode in the QR
              code.
            </p>
          </div>
          <div className='step md:w-1/3 text-center flex flex-col items-center'>
            <img
              src={img2}
              alt='Step 2'
              className='w-40 h-40 object-contain mb-4'
            />
            <h3 className='text-xl font-semibold mb-2'>Generate QR Code</h3>
            <p className=' max-w-xs'>
              Click the generate button, and watch as your QR code is instantly
              created.
            </p>
          </div>
          <div className='step md:w-1/3 text-center flex flex-col items-center'>
            <img
              src={img3}
              alt='Step 3'
              className='w-40 h-40 object-contain mb-4'
            />
            <h3 className='text-xl font-semibold  mb-2'>Download & Share</h3>
            <p className=' max-w-xs'>
              Once generated, you can download your QR code and share it
              wherever you like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
