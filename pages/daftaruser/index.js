import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';


import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

function daftaruser() {
  const [keyword, setKeyword] = useState('');
  const [globalFilter, setGlobalFilter] = useState(null);

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  const handleGroupFilter = (group) => {
    console.log('Filtering by group:', group);
  };

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


  //Delete
  function deleteUser(userId) {
    axios.delete(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/user/${userId}`, {
      headers: {
        Authorization: Cookies.get('admin_token')
      }
    }).then(() => {
      alert(`User  with ID ${userId} succesfully deleted!`)
    }).catch((error) => {
      alert('Delete Failed')
      console.log(error);
    })
  }
  return (
    <div className="grid justify-center">
      <h5>Data User</h5>
      <Dialog visible={addDialog} style={{ width: '50vw' }} onHide={() => setAddDialog(false)}>
        <p>Data User</p>



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
                setAddDialog(false)
                // resetStateInput()
              }).catch((error) => {
                alert('Failed adding new User')
                setAddDialog(false)
                console.log(error);
                // resetStateInput()
              })
            }}></Button>
        </div>
      </Dialog>
      <div className="col-12">
        <div className="card">
          <div className="flex justify-between mb-4">
            <div>
              <span className="p-buttonset flex">
                <Button label="DJA" severity="secondary" outlined />
                <Button label="Sekretariat" severity="secondary" outlined />
                <Button label="P APBN" severity="secondary" outlined />
                <Button label="Ekontim" severity="secondary" outlined />
                <Button label="PMK" severity="secondary" outlined />
                <Button label="Polhuk Hankam" severity="secondary" outlined />
                <Button label="PNBP" severity="secondary" outlined />
                <Button label="DSP" severity="secondary" outlined />
                <Button label="HPP" severity="secondary" outlined />
                <Button label="Lainnya" severity="secondary" outlined />
              </span>
            </div>
          </div>

          <div>
            <Button icon={PrimeIcons.PLUS} className="p-button-success" style={{ marginRight: '5px' }}
              onClick={() => setAddDialog(true)} />
            <Button icon="pi pi-search" onClick={handleSearch} />
            <InputText type="search" onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
          </div>

          <div style={{ marginTop: '20px' }}>
            <table className="min-w-full bg-white rounded-md">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">User ID</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Nama User</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">NIP [Organisasi]</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Email</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">User Group</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Edit</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Delete</th>

                </tr>
              </thead>
              <tbody>
                {arrUser.map(user => <tr key={user.id}>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{user.id}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{user.nama}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{user.NIP}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{user.email}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{user.user_group.nama}</td>

                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity='warning' label='Edit' onClick={() => {
                      editMenu(menu)

                    }}></Button>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity="danger" label='Delete' onClick={() => {
                      deleteUser(user.id)
                    }}></Button>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default daftaruser;