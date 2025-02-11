import React from 'react';
import Image from 'next/image';
import { logo, qr } from '@/app/lib/utils/image';

const Accepted = () => {
    return (
        <div className='bg-background font-lato flex justify-center items-center min-h-screen'>
            <div className='w-full max-w-[1200px] bg-black backdrop-brightness-100 shadow-xl md:rounded-lg overflow-hidden'>
                {/* Header */}
                <div className='flex flex-col-reverse md:flex-row justify-between md:items-center items-start p-6 bg-from-90-to-blue-green'>
                    <h1 className='text-xl md:text-2xl font-bold text-left tracking-wide mb-4 md:mb-0'>
                        SELAMAT! ANDA DINYATAKAN LULUS SELEKSI SNBP 2024
                    </h1>
                    <Image
                        className='w-40 h-20'
                        src={logo}
                        alt="Logo"
                    />
                </div>

                {/* Main Content */}
                <div className='p-6'>
                    {/* NISN, Nama, dan Program Studi */}
                    <div className='flex flex-col md:flex-row justify-between items-start mb-6'>
                        <div className='flex flex-col gap-2 mb-6 md:mb-0'>
                            <span className='text-label text-sm font-bold'>NISN 83827 - NOREG 837384930</span>
                            <span className='text-2xl md:text-3xl text-white font-bold'>NARESWARA MAULANA ALETHA ALHAQ</span>
                            <div className='text-lg md:text-xl font-light flex flex-col'>
                                <span>INFORMATIKA (S1)</span>
                                <span>UNIVERSITAS DIPONEGORO</span>
                            </div>
                        </div>
                        <Image
                            className='w-24 h-24 md:w-32 md:h-32'
                            src={qr}
                            alt="QR Code"
                        />
                    </div>

                    {/* Informasi Tambahan dan Pendaftaran Ulang */}
                    <div className='flex flex-col md:flex-row justify-between gap-6'>
                        {/* Informasi Tambahan */}
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-accepted text-sm'>Tanggal Lahir</span>
                                    <span className='font-bold text-white text-lg'>5/12/2006</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-accepted text-sm'>Asal Sekolah</span>
                                    <span className='font-bold text-white text-lg'>SMK Raden Umar Said</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-accepted text-sm'>Kabupaten/Kota</span>
                                    <span className='font-bold text-white text-lg'>Kab. Kudus</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-accepted text-sm'>Provinsi</span>
                                    <span className='font-bold text-white text-lg'>Jawa Tengah</span>
                                </div>
                            </div>
                        </div>

                        {/* Pendaftaran Ulang */}
                        <div className='bg-white p-4 rounded-lg flex flex-col gap-2 w-full md:w-auto'>
                            <div className='text-blackFont flex flex-col'>
                                <span className='text-lg font-bold'>Silahkan lakukan pendaftaran ulang.</span>
                                <span className='text-sm font-light'>
                                    Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat dilihat dari link berikut:
                                </span>
                            </div>
                            <a
                                className='text-accepted text-lg font-bold break-words'
                                href="https://um.undip.ac.id/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://um.undip.ac.id/
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className='p-6 flex flex-col gap-4 bg-gray-800'>
                    <span className='text-sm font-light text-font text-justify'>
                        Status penerimaan Anda sebagai mahasiswa akan ditetapkan setelah PTN tujuan melakukan verifikasi data akademik (rapor dan/atau portofolio). Silakan Anda membaca peraturan tentang penerimaan mahasiswa baru di laman PTN tujuan.
                    </span>
                    <span className='text-sm font-light text-font text-justify'>
                        Khusus peserta KIP Kuliah, PTN tujuan juga dapat melakukan verifikasi data ekonomi dan/atau kunjungan ke tempat tinggal Anda sebelum menetapkan status penerimaan Anda.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Accepted;