import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';


const latihan2 = () => {
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: '2023', code: '2023' },
        { name: '2022', code: '2022' },
        { name: '2021', code: '2021' },
        { name: '2020', code: '2020' }
    ];

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                <h5>Registrasi</h5>
                    <p>Silahkan Lengkapi Registrasi!</p>
                    <div className="field">
                        <label htmlFor="name1">Username</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Password</label>
                        <InputText id="age1" type="text" />
                    </div>
                    </div>
                        <Button label="Register"></Button>
                    </div>

                <div className="col-12 md:col-6">
                    <div className="card p-fluid">
                        <h5>Login</h5>
                            <p>Silahkan Login dengan Email Anda!</p>
                <div className="field">
                    <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="text" />
                    </div>
                <div className="field">
                    <label htmlFor="password1">Password</label>
                        <InputText id="password1" type="text" />
                    </div>
                <div className="field">
                    <label htmlFor="tahunanggaran1">Tahun Anggaran</label>
                        <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>  
                    </div>
                    <Button label="Login"></Button>
                        <small>Lupa Password?</small>
                    </div>
                </div>
            </div>
        );
    };
export default latihan2;