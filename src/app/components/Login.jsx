import React from 'react';
import Image from 'next/image';
import { logo } from '../lib/utils/image';

const Login = () => {
  return (
    <div className="bg-background flex justify-center items-center h-screen ">
      <div className="bg-primary p-6 sm:p-8 md:p-9 w-full max-w-[700px] rounded-md">
        <div className="flex">
          <Image className="h-[40px] sm:h-[70px] w-auto mb-5" src={logo} alt="Logo" />
        </div>
        <div className="text-left">
          <h1 className="text-[34px] font-extrabold sm:text-[2.5rem] ">HASIL SELEKSI SNBP 2024</h1>
          <p className="text-font mb-6 sm:mb-8">Masukkan Nomor Pendaftaran SNBP dan Tanggal Lahir.</p>
        </div>

        <div className="flex flex-col mb-6 gap-2">
          <label htmlFor="noRegist" className="text-label font-extrabold text-sm sm:text-base">
            Nomor Pendaftaran
          </label>
          <input
            className="bg-input text-[1rem] py-3 px-4 rounded-md font-semibold placeholder-neutral-500"
            type="text"
            name="noRegist"
            id="noRegist"
            placeholder="Nomor registrasi pada kartu SNBP"
          />
        </div>

        <div className="flex flex-col mb-6 gap-2">
          <label htmlFor="date" className="text-label font-extrabold text-sm sm:text-base">
            Tanggal Lahir
          </label>
          <div className="flex gap-2 items-center sm:justify-start">
            <input
              className="bg-input w-[80px] sm:w-[100px] text-[1rem] py-3 px-4 rounded-md font-semibold placeholder-neutral-500 text-center"
              type="text"
              name="date"
              id="date"
              placeholder="Tanggal"
            />
            <span className="text-[20px] font-bold text-font">/</span>
            <input
              className="bg-input w-[80px] sm:w-[100px] text-[1rem] py-3 px-4 rounded-md font-semibold placeholder-neutral-500 text-center"
              type="text"
              name="month"
              id="month"
              placeholder="Bulan"
            />
            <span className="text-[20px] font-bold text-font">/</span>
            <input
              className="bg-input w-[80px] sm:w-[100px] text-[1rem] py-3 px-4 rounded-md font-semibold placeholder-neutral-500 text-center"
              type="text"
              name="year"
              id="year"
              placeholder="Tahun"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-4">
          <a href="/accepted">
            <button className="bg-accepted w-full sm:w-auto rounded-full font-extrabold text-sm py-3 px-6 tracking-wide shadow-md">
              LIHAT HASIL SELEKSI
            </button>
          </a>
            <a className="text-xs  text-accepted tracking-widest text-center font-medium sm:text-left" href="">
            PENGUMUMAN HASIL SELEKSI SNBP 2024 (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
