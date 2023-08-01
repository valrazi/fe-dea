import React, { use, useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

//import axios
import axios from "axios";

//import js cookie
import Cookies from 'js-cookie';

import Router from 'next/router';

const latihan2 = () => {
    const [thn_anggaran, setThnAnggaran] = useState(0);
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [regStatus, setRegStatus] = useState('');
    const dropdownItems = [
        { name: '2023', code: 2023 },
        { name: '2022', code: 2022 },
        { name: '2021', code: 2021 },
        { name: '2020', code: 2020 }
    ];

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPassLogin] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Registrasi</h5>
                    <p>Silahkan Lengkapi Registrasi!</p>
                    <p>{regStatus}</p>
                    <div className="field">
                        <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="text" value={emailReg} onInput={(e) => setEmailReg(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Password</label>
                        <InputText id="age1" type="text" value={passwordReg} onInput={(e) => setPasswordReg(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label htmlFor='thn_anggaran'>Tahun Anggaran</label>
                        <Dropdown id="thn_anggaran" value={thn_anggaran} onChange={(e) => setThnAnggaran(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                    </div>
                </div>
                <Button label="Register"
                    onClick={() => {
                        axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/register`, {
                            email: emailReg,
                            password: passwordReg,
                            tahun_anggaran: thn_anggaran.code
                        }).then((res) => {
                            setRegStatus('Registrasi Berhasil')
                            setEmailReg('')
                            setPasswordReg('')
                            setThnAnggaran(null)
                        }).catch((error) => {
                            setRegStatus('Registrasi Gagal')
                            console.log(error);
                        })
                    }}></Button>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Login</h5>
                    <p>Silahkan Login dengan Email Anda!</p>
                    <p>{loginStatus}</p>
                    <div className="field">
                        <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="text" value={emailLogin} onInput={(e) => setEmailLogin(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="password1">Password</label>
                        <InputText id="password1" type="text" value={passwordLogin} onInput={(e) => setPassLogin(e.target.value)} />
                    </div>
                    <div className="field">
                    </div>

                    <Button label="Login" onClick={() => {
                        axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/login`, {
                            email: emailLogin,
                            password: passwordLogin,
                        }).then((res) => {
                            Cookies.set('admin_token', res.data.data.accessToken)
                            setLoginStatus('Login Berhasil')
                            Router.push('/latihan')
                        }).catch((error) => {
                            setLoginStatus('Login Gagal')
                            console.log(error);
                        })
                    }}></Button>

                    <div className='field'>
                        <Button label="logout" severity='danger' onClick={() => {
                            Cookies.remove('admin_token')
                            alert('Logout success!')
                        }}></Button>
                    </div>
                </div>


            </div>


        </div>
    );
};
export default latihan2;