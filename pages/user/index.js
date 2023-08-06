import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
//import axios
import axios from "axios";

//import js cookie
import Cookies from 'js-cookie';

import Router from 'next/router';

const rekamuser = () => {
    const [namaProfile, setNamaProfile] = useState('')
    React.useEffect(() => {
        if (!Cookies.get('user_token')) {
            Router.push('/loginuser')
        }
        setNamaProfile(Cookies.get('userName'))
    })
    const [addNama, setAddNama] = useState(Cookies.get('userName'))
    const [addNIP, setAddNIP] = useState(Cookies.get('userNIP'))
    const [addEmail, setAddEmail] = useState(Cookies.get('userEmail'))
    const [addUserGroup, setUserGroup] = useState(Cookies.get('userUG'))
    const [userId, setUserId] = useState(Cookies.get('userId'))

    const [inputDisabled, setInputDisabled] = useState(true)
    const [submitEdit, setSubmitEdit] = useState(false)
    const [textUbah, setTextUbah] = useState(true)

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h4>User Profile</h4>
                    <p>Data User</p>



                    <div>
                        <label htmlFor="namauser" className="block text-900 text-xl font-medium mb-2">
                            Nama User
                        </label>
                        <InputText inputid="namauser" type="text" placeholder="nama user"
                            className={`w-full md:w-27rem mb-5 ${inputDisabled ? 'bg-gray-300' : ''}`} style={{ padding: '1rem' }}
                            value={addNama} disabled={inputDisabled}
                            onInput={(e) => setAddNama(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="nip" className="block text-900 text-xl font-medium mb-2">
                            NIP [Organisasi]
                        </label>
                        <InputText inputid="nip" type="text" placeholder="nip"
                            className={`w-full md:w-27rem mb-5 ${inputDisabled ? 'bg-gray-300' : ''}`} style={{ padding: '1rem' }}
                            value={addNIP} disabled={inputDisabled}
                            onInput={(e) => setAddNIP(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                            Email
                        </label>
                        <InputText inputid="email" type="text" placeholder="email"
                            className={`w-full md:w-27rem mb-5 ${inputDisabled ? 'bg-gray-300' : ''}`} style={{ padding: '1rem' }}
                            value={addEmail} disabled={inputDisabled}
                            onInput={(e) => setAddEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="usergroup" className="block text-900 text-xl font-medium mb-2">
                            User Group
                        </label>
                        <InputText inputid="usergroup" type="text" placeholder="user group"
                            className="w-full md:w-27rem mb-5 bg-gray-300" style={{ padding: '1rem' }}
                            value={addUserGroup} disabled />
                    </div>


                    <div className="col-4 md:col-4">
                        <Button label={textUbah ? 'Ubah' : 'Batal Ubah'} icon={textUbah ? "pi pi-pencil" : "pi pi-times"} severity="warning"
                            onClick={(e) => {
                                setInputDisabled(!inputDisabled)
                                setSubmitEdit(!submitEdit)
                                setTextUbah(!textUbah)
                            }}></Button>
                    </div>
                    <div className="col-4 md:col-4">
                        <Button label="Submit Edit" icon="pi pi-check" severity="success"
                            visible={submitEdit} onClick={async (e) => {
                                try {
                                    const { data } = await axios.put(`${process.env.NEXT_PUBLIC_BACKENDURL}/user/${userId}`, {
                                        "nama": addNama,
                                        "email": addEmail,
                                        "NIP": addNIP
                                    }, {
                                        headers: {
                                            Authorization: Cookies.get('user_token')
                                        }
                                    })
                                    Cookies.set('userNIP', data.data.NIP)
                                    Cookies.set('userEmail', data.data.email)
                                    Cookies.set('userName', data.data.nama)
                                    // Cookies.set('userUG', data.data.user_group)
    
                                    alert('Edit Berhasil')
                                    Router.push('/user')
                                    setInputDisabled(!inputDisabled)
                                    setSubmitEdit(!submitEdit)
                                    setTextUbah(!textUbah)
                                } catch (error) {
                                    alert('gagal edit')
                                }
                            }}></Button>
                        <Button label='Logout' icon="pi pi-sign-out" severity='danger'
                        onClick={()=> {
                            Cookies.remove('user_token')
                            Cookies.remove('userId')
                            Cookies.remove('userNIP')
                            Cookies.remove('userEmail')
                            Cookies.remove('userName')
                            Cookies.remove('userUG')
                            alert('logout succes')
                            Router.push('/loginuser')
                        }}></Button>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <div className="border-1 surface-border border-round m-1 text-center py-5">
                        <img src="/demo/images/login/user.png" alt="Image" height="170" className="mb-2" />
                        <p>{namaProfile}</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default rekamuser;