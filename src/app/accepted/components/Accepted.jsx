import React from 'react'
import Image from 'next/image'
import { logo, qr } from '@/app/lib/utils/image'
const Accepted = () => {
    return (
        <div className='bg-background font-lato flex justify-center items-center h-screen'>
            <div className='w-[1200px] bg-black backdrop-brightness-100 shadow-xl'>
                <div className='flex justify-between items-center p-[30px] bg-from-90-to-blue-green'>
                    <h1 className='text-[1.7rem] font-[700] tracking-wide'>SELAMAT! ANDA DINYATAKAN LULUS SELEKSI SNBP 2024</h1>
                    <Image className='w-[166.5px] h-[80px]' src={logo}></Image>
                </div>
                <div className='p-[30px]'>
                    <div className='flex justify-between mb-[30px]'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-label text-[0.9rem] font-[700] mb-[5px]'>NISN 83827 - NOREG 837384930</span>
                            <span className='text-[2.5rem] text-white font-[700] mb-[5px]'>NARESWARA MAULANA ALETHA ALHAQ</span>
                            <div className='text-[20.8px] font-[300] flex flex-col'>
                                <span>INFORMATIKA (S1)</span>
                                <span>UNIVERSITAS DIPONEGORO</span>
                            </div>
                        </div>
                        <Image className='w-[120px] h-[120px]' src={qr}></Image>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-[15px]'>
                            <div className='flex flex-col gap-[30px] w-[270px]'>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-accepted text-[0.9rem] mb-[5px]'>Tanggal Lahir</span>
                                    <span className='font-bold text-white text-[1.1rem] tracking-wide'>5/12/2006</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-accepted text-[0.9rem]'>Asal Sekolah</span>
                                    <span className='font-bold text-white text-[1.1rem] tracking-wide'>SMK Raden Umar Said</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[30px] w-[270px]'>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-accepted text-[0.9rem] mb-[5px]'>Kabupaten/Kota</span>
                                    <span className='font-bold text-white text-[1.1rem] tracking-wide'>Kab. Kudus</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-accepted text-[0.9rem]'>Provinsi </span>
                                    <span className='font-bold text-white text-[1.1rem] tracking-wide'>Jawa Tengah</span>
                                </div>
                            </div>


                        </div>
                        <div className='bg-white p-[15px] h-fit flex flex-col gap-2'>
                            <div className='text-blackFont flex flex-col'>
                                <span className='text-[1.2rem] font-[700]'>Silahkan lakukan pendaftaran ulang.</span>
                                <span className='text-[0.9rem] font-[300] '>Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat di lihat dari link berikut </span>
                            </div>
                            <a className='text-accepted text-[1.2rem] font-[800]' href="">https://um.undip.ac.id/</a>
                        </div>
                    </div>
                </div>
                <div className='p-[30px] flex flex-col gap-4'>
                    <span className='text-[0.9rem] font-[300] text-font tracking-wide text-justify'>Status penerimaan Anda sebagai mahasiswa akan ditetapkan setelah PTN tujuan melakukan verifikasi data akademik (rapor dan/atau portofolio). Silakan Anda membaca peraturan tentang penerimaan mahasiswa baru di laman PTN tujuan.</span>
                    <span className='text-[0.9rem] font-[300] text-font tracking-wide text-justify'>Khusus peserta KIP Kuliah, PTN tujuan juga dapat melakukan verifikasi data ekonomi dan/atau kunjungan ke tempat tinggal Anda sebelum menetapkan status penerimaan Anda.</span>
                </div>
            </div>
        </div>
    )
}

export default Accepted