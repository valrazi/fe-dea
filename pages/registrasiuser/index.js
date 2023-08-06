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

import Router from 'next/router';


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

  const [arrUser, setArrUser] = useState([]);
  const [arrUserGroup, setArrUserGroup] = useState([]);
    React.useEffect(() => {
        if (!Cookies.get('admin_token')) {
          Router.push('/login')
        }
        async function listUser() {
          const listUser = await axios.get(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/user`, {
            headers: {
              Authorization: Cookies.get('admin_token')
            }
          })
          setArrUser(listUser.data.data)
        }
        listUser()
    
        //
        axios.get(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/user-group`, {
          headers: {
            Authorization: Cookies.get('admin_token')
          }
        }).then((res) => {
          const arrData = res.data.data
          const newArrData = []
          arrData.forEach((data) => {
            let newData = {
              name: data.nama,
              code: data.id
            }
            newArrData.push(newData)
          })
          setArrUserGroup(newArrData)
        }).catch((err) => {
          console.log(err);
        })
      })
    
      //Add Data
      const [addDialog, setAddDialog] = useState(false)
      const [addNama, setAddNama] = useState('')
      const [addNIP, setAddNIP] = useState('')
      const [addEmail, setAddEmail] = useState('')
      const [addPassword, setAddPassword] = useState('')
      const [addUserGroup, setAddUserGroup] = useState(0)
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
                            <div>
                                <label htmlFor="namauser" className="block text-900 text-xl font-medium mb-2">
                                    Nama User
                                </label>
                                <InputText inputid="namauser" type="text" placeholder="nama user" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }}
                                    value={addNama} onInput={(e) => setAddNama(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="nip" className="block text-900 text-xl font-medium mb-2">
                                    NIP [Organisasi]
                                </label>
                                <InputText inputid="nip" type="text" placeholder="nip" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }}
                                    value={addNIP} onInput={(e) => setAddNIP(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText inputid="email" type="text" placeholder="email" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }}
                                    value={addEmail} onInput={(e) => setAddEmail(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="userid" className="block text-900 text-xl font-medium mb-2">
                                    Password
                                </label>
                                <InputText inputid="userid" type="text" placeholder="Password" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }}
                                    value={addPassword} onInput={(e) => setAddPassword(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="usergroup" className="block text-900 text-xl font-medium mb-2">
                                    User Group
                                </label>
                                <Dropdown value={addUserGroup} onChange={(e) => setAddUserGroup(e.value)} options={arrUserGroup} optionLabel="name"
                                    placeholder="Select Menu" className="w-full md:w-14rem" />
                            </div>

                            <div className="col-4 md:col-4">
                                <Button label="Tambah" icon="pi pi-check-circle"
                                    onClick={() => {
                                        alert('Processing adding user!')
                                        axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/user`, {
                                            "email": addEmail,
                                            "password": addPassword,
                                            "nama": addNama,
                                            "NIP": addNIP,
                                            "ugID": addUserGroup.code
                                        }, {
                                            headers: {
                                                Authorization: Cookies.get('admin_token')
                                            }
                                        }).then((res) => {
                                            alert('Succesfully adding new User User!')
                                            Router.push('/loginuser')
                                            // resetStateInput()
                                        }).catch((error) => {
                                            alert('Failed adding new User')
                                            setAddDialog(false)
                                            console.log(error);
                                            // resetStateInput()
                                        })
                                    }}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default registrasiuser;