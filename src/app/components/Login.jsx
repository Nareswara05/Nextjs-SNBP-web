import React from 'react'
import Image from 'next/image'
import { logo } from '../lib/utils/image'

const Login = () => {
  return (
    <div className='bg-background flex justify-center font-lato items-center h-screen'>
        <div className='bg-primary p-[30px] w-[700px] rounded-sm'>
          <Image className='h-[86px] w-[178px] mb-5' src={logo}></Image>
          <div>
              <h1 className='text-[2.7rem] font-bold'>HASIL SELEKSI SNBP 2024</h1>
              <p className='text-font mb-10'>Masukkan Nomor Pendaftaran SNBP dan Tanggal Lahir.</p>
          </div>
          <div className='flex flex-col mb-[30px] gap-3'>
            <label htmlFor='noRegist' className='text-label font-extrabold text-[14px]'>Nomor Pendaftaran</label>
            <input
              className='bg-input  text-[1.1rem] py-[15px] px-[18px] rounded-md font-[700] placeholder-neutral-500' 
              type="text" 
              name="noRegist" 
              id="noRegist"
              placeholder='Nomor registrasi pada kartu SNBP'
              />
          </div>
          <div className='flex flex-col mb-[30px] gap-3'>
            <label htmlFor='noRegist' className='text-label font-extrabold text-[14px]'>Tanggal Lahir</label>
            <div className='flex gap-3 items-center'>
            <input
              className='bg-input w-[110px]  text-[1rem] py-[15px] px-[18px] rounded-md font-[700] placeholder-neutral-500 text-center' 
              type="text" 
              name="date" 
              id="date"
              placeholder='Tanggal'
              />
              <span className='text-[24px] font-[700] text-font'>/</span>
              <input
              className='bg-input w-[110px]  text-[1rem] py-[15px] px-[18px] rounded-md font-[700] placeholder-neutral-500 text-center' 
              type="text" 
              name="month" 
              id="month"
              placeholder='Bulan'
              />
              <span className='text-[24px] font-[700] text-font'>/</span>
              <input
              className='bg-input w-[110px]  text-[1rem] py-[15px] px-[18px] rounded-md font-[700] placeholder-neutral-500 text-center' 
              type="text" 
              name="year" 
              id="year"
              placeholder='Tahun'
              />
            </div>
          </div>
          <div className='mt-10 flex justify-between items-center'>
            <a href="/accepted"><button a className='bg-accepted rounded-full font-[800] text-[0.8rem] py-[15px] px-[22px] tracking-wide shadow-md'>LIHAT HASIL SELEKSI</button></a>
              <a className='text-[12px] text-accepted tracking-widest' href="">PENGUMUMAN HASIL SELEKSI SNBP 2024 (PDF)</a>
            </div>
        </div>
    </div>
  )
}

export default Login