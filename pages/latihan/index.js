import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Panel } from 'primereact/panel';
import getConfig from 'next/config';
import { Image } from 'primereact/image';
import Link from 'next/link';
import { Menu } from 'primereact/menu';


const latihan = () => {
    const [password, setPassword] = useState('');
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const menu2 = useRef(null);

    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">DSW</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-home text-blue-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">24 new </span>
                    <span className="text-500">since last visit</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Revenue</span>
                            <div className="text-900 font-medium text-xl">$2.100</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-map-marker text-orange-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">%52+ </span>
                    <span className="text-500">since last week</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Registered</span>
                            <div className="text-900 font-medium text-xl">28441</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">520 </span>
                    <span className="text-500">newly registered</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Comments</span>
                            <div className="text-900 font-medium text-xl">152 Unread</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-comment text-purple-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">85 </span>
                    <span className="text-500">responded</span>
                </div>
            </div>
            <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Pengumuman</h5>
                <Panel header="Sekretariat" toggleable>
                    <Image src={`${contextPath}/demo/images/login/Gabungan.jpg`} alt="login" width={330} preview/>
                        <p>
                            Halo Sobat DJA! Babak Kualifikasi Pemilihan Agen Perubahan Terbaik dalam Penyederhanaan Probis DJA,
                            melalui *Kompetisi Inovasi DJA 2022* kini telah usai. Melalui dewan juri, telah dipilih 10 peserta 
                            inovasi eksternal dan 10 peserta inovasi internal untuk masuk ke *Babak Final*. Mau tahu sapa saja 
                            yang masuk Babak Kualifikasi, Yuk cek di sini 
                        </p>
                    <div>
                        <a href="https://www.youtube.com/watch?v=TsiSyCvXhZc" target="_blank" rel="noopener noreferrer" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Tautan YouTube
                        </a>
                    </div>
                </Panel>
                    <Panel header="Sekretariat" toggleable >
                        <Image src={`${contextPath}/demo/images/login/Hari Anti Korupsi.png`} alt="login" width={330} preview/>
                            <p>
                                Untuk menjaga dan meningkatkan semangat berintegritas dan anti korupsi di lingkungan 
                                Direktorat Jenderal Anggaran, berikut kami sampaikan dokumentasi kegiatan Puncak Acara 
                                Hakordia yang dilaksanakan pada tanggal 19 Desember 2022 melalui tautan 
                                dibawah ini dengan agenda: Dialog interaktif bersama Bapak Amien Sunaryadi, Pengumuman 
                                Pemenang Lomba Film Pendek dan Animasi Anti Korupsi, Penyerahan Piagam Predikat WBK 
                                kepada 6 Unit Eselon II DJA
                            </p>
                        <div>
                            <a href="https://drive.google.com/drive/folders/1vuFXRGAH12M_xvzAOSIcaHXOxjtdYi6Q" target="_blank" 
                                rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 
                                px-4 rounded">
                                    Tautan Google Drive
                            </a>
                        </div>
                    </Panel>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className= "card p-fluid">
                    <div className="flex align-items-center justify-content-between mb-4">
                        <h5>Informasi</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu2.current.toggle(event)} />
                            <Menu
                                ref={menu2}
                                popup
                                model={[
                                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                                    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
                                ]}
                            />
                        </div>
                    </div>

                    <span className="block text-600 font-medium mb-3">TODAY</span>
                    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-bell text-xl text-blue-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                Penawaran Menulis di Majalah Warta Anggaran Edisi 40
                                <span className="text-700">
                                    {' '}
                                    Majalah Warta Anggaran merupakan salah satu media informasi yang 
                                    dimiliki DJA yang didistribusikan kepada seluruh pegawai dan stakeholder DJA. 
                                    <span className="text-blue-500">79$</span>
                                </span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-download text-xl text-orange-500" />
                            </div>
                            <span className="text-700 line-height-3">
                                Your request for withdrawal of <span className="text-blue-500 font-medium">2500$</span> has been initiated.
                            </span>
                        </li>
                    </ul>

                    <span className="block text-600 font-medium mb-3">YESTERDAY</span>
                    <ul className="p-0 m-0 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-globe text-xl text-blue-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                Keyser Wick
                                <span className="text-700">
                                    {' '}
                                    has purchased a black jacket for <span className="text-blue-500">59$</span>
                                </span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-question text-xl text-pink-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                Jane Davis
                                <span className="text-700"> has posted a new questions about your product.</span>
                            </span>
                        </li>
                    </ul>
                </div>
                </div>
             
        </div>
    </div>
    );
};

export default latihan;