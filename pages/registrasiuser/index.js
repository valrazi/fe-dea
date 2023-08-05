import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';

//import axios
import axios from "axios";

//import js cookie
import Cookies from 'js-cookie';

const registrasiuser = () => {
    const [password, setPassword] = useState('');
    const [iduser, setIduser] = useState('');
    const [thang, setThang] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });
    const thangValues = [
        { name: '2023', thang: '2023' },
        { name: '2024', thang: '2024' }
    ];
    
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPassLogin] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <div style={{ borderRadius: '56px', padding: '0.4rem', background: 'linear-gradient(180deg, var(--primary-color) 100%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-5 px-2 sm:px-5" style={{ borderRadius: '53px' }}>
                    <div className="text-center mb-5">
                        
                            <img src={`${contextPath}/demo/images/login/Logo Kemenkeu.png`} alt="Image" height="50" className="mb-3" />
                            <div className="text-900 text-3l font-medium mb-2">DSW</div>
                            <span className="text-600 font-medium">Kementerian Keuangan RI</span>
                        </div>

                        <div>
                                <label htmlFor="iduser" className="block text-900 text-l font-medium mb-2">
                                    Userid
                                </label>
                                <InputText id="email" type="text" value={emailLogin} onInput={(e) => setEmailLogin(e.target.value)}  placeholder="****" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></InputText>

                                <label htmlFor="nama" className="block text-900 text-l font-medium mb-2">
                                    Nama 
                                </label>
                                <InputText id="email" type="text" value={emailLogin} onInput={(e) => setEmailLogin(e.target.value)}  placeholder="****" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></InputText>

                                <label htmlFor="nip" className="block text-900 text-l font-medium mb-2">
                                    NIP [Organisasi] 
                                </label>
                                <InputText id="email" type="text" value={emailLogin} onInput={(e) => setEmailLogin(e.target.value)}  placeholder="****" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></InputText>

                                <label htmlFor="usergroup" className="block text-900 text-l font-medium mb-2">
                                    User Group 
                                </label>
                                <InputText id="email" type="text" value={emailLogin} onInput={(e) => setEmailLogin(e.target.value)}  placeholder="****" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></InputText>

                                <label htmlFor="email" className="block text-900 text-l font-medium mb-2">
                                    Email 
                                </label>
                                <InputText id="email" type="text" value={emailLogin} onInput={(e) => setEmailLogin(e.target.value)}  placeholder="****" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></InputText>

                                <label htmlFor="password" className="block text-900 font-medium text-l mb-2">
                                    Password
                                </label>
                                <Password id="password1" type="text" value={passwordLogin} onInput={(e) => setPassLogin(e.target.value)} placeholder="****" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>
                                

                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                    <div className="flex align-items-center">
                                        
                                    </div>
                                </div>

                                <Button label="Registrasi" onClick={() => {
                        axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/login`, {
                            email: emailLogin,
                            password: passwordLogin,
                        }).then((res) => {
                            Cookies.set('admin_token', res.data.data.accessToken)
                            alert('Login Berhasil')
                            router.push('/dashboard')
                        }).catch((error) => {
                            
                            alert('Login Gagal')
                            console.log(error);
                        })
                    }}></Button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default registrasiuser;