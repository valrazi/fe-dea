import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { PrimeIcons } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';

import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

function daftargroupuser() {
  const [keyword, setKeyword] = useState('');
  const [globalFilter, setGlobalFilter] = useState(null);

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  const handleGroupFilter = (group) => {
    console.log('Filtering by group:', group);
  };

  const [arrUserGroup, setArrUserGroup] = useState([]);
  const [arrMenu, setArrMenu] = useState([])

  React.useEffect(() => {
    if (!Cookies.get('admin_token')) {
      Router.push('/login')
    }
    async function listUserGroup() {
      const listUserGroup = await axios.get(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/user-group`, {
        headers: {
          Authorization: Cookies.get('admin_token')
        }
      })
      setArrUserGroup(listUserGroup.data.data)
    }
    listUserGroup()

    axios.get(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/menu`, {
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
      setArrMenu(newArrData)
    }).catch((err) => {
      console.log(err);
    })
  })

  //ADD NEW Group User
  const [nama, setNama] = useState('')
  const [menuId, setMenuId] = useState(0)
  // function resetStateInput() {
  //   setNama('')
  //   setMenuId(0)
  // }
  

  function deleteUG(UGID) {
    axios.delete(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/user-group/${UGID}`, {
      headers: {
        Authorization: Cookies.get('admin_token')
      }
    }).then(() => {
      alert(`User Group with ID ${UGID} succesfully deleted!`)
    }).catch((error) => {
      alert('Delete Failed')
      console.log(error);
    })
  }

  const [editVisible, setEditVisible] = useState(false)
  const [eUserGroupId, setEditIdUserGroup] = useState(0)
  const [eNama, setEditNama] = useState('')
  const [eMenu, setEditMenu] = useState(0)
  const [eDropdown, setEditDropdown] = useState(null)

  async function editUserGroup(ug) {
    setEditVisible(true)
    setEditNama(ug.nama)
    setEditMenu(ug.menu.nama)
    setEditIdUserGroup(ug.id)
    let i =0
    for(let j = 0; j < arrMenu.length; j ++){
      if(arrMenu[j].code == ug.menuId) {
        i = j
        break;
      }
    }
    setEditDropdown(arrMenu[i])
  }

  function editUserGroupAPI() {
    axios.put(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/user-group/${eUserGroupId}`, {
      nama: eNama,
      menuId: eDropdown.code
    }, {
      headers: {
        Authorization: Cookies.get('admin_token')
      }
    }).then((res) => {
      alert(`User Group with ID ${eDropdown.code} succesfully updated!`)
      console.log(res);
      setEditVisible(false)
    }).catch((error) => {
      alert('Update Failed')
      setEditVisible(false)
      console.log(error);
    })
  }
  return (

    
    <div className="grid justify-center">
      <h5>Data User Group</h5>
      <Dialog header="Edit Menu" visible={editVisible}
              style={{ width: '50vw' }} onHide={() => setEditVisible(false)}>
              <div className="card">
              <div className="card p-fluid">
                <div className="field grid">
                  <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                    User Group
                  </label>
                  <div className="col-12 md:col-10">
                    <InputText id="email3" type="text" 
                    value={eNama} onInput={(e) => setEditNama(e.target.value)}/>
                  </div>
                </div>
                <div className="field grid">
                  <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                    Menu
                  </label>
                  <div className="col-12 md:col-10">
                  <Dropdown value={eDropdown} onChange={(e) => setEditDropdown(e.value)} options={arrMenu} optionLabel="name"
                              placeholder="Select Menu" className="w-full md:w-14rem" />
                  </div>
                </div>
              </div>
              <div className="col-4 md:col-4">
                <Button label="Ubah" severity="warning" style={{ marginRight: '10px' }} onClick={() => {
                  editUserGroupAPI()
                }}></Button>
              </div>
            </div>
              
            </Dialog>
      <div className="col-12">
        <div className="card">
          <div className="flex justify-between mb-4">
            <div>
              <Button icon={PrimeIcons.PLUS} className="p-button-success" style={{ marginRight: '5px' }} />
              <Button icon="pi pi-search" onClick={handleSearch} />
              <InputText type="search" onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </div>
          </div>
          <div>
            <table className="min-w-full bg-white rounded-md">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Kode</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">User Group</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Menu</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Edit</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Delete</th>
                </tr>
              </thead>
              <tbody>
                {arrUserGroup.map(UG => <tr key={UG.id}>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{UG.id}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{UG.nama}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{UG.menu.nama}</td>

                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity='warning' label='Edit' onClick={() => {
                      editUserGroup(UG)

                    }}></Button>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity="danger" label='Delete' onClick={() => {
                      deleteUG(UG.id)
                    }}></Button>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid justify-center">
          <h5>Form Daftar Group User</h5>
          <div className="col-12">
            <div className="card">
              <div className="card p-fluid">
                <div className="field grid">
                  <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                    User Group
                  </label>
                  <div className="col-12 md:col-10">
                    <InputText id="email3" type="text" 
                    value={nama} onInput={(e) => setNama(e.target.value)}/>
                  </div>
                </div>
                <div className="field grid">
                  <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                    Menu
                  </label>
                  <div className="col-12 md:col-10">
                  <Dropdown value={menuId} onChange={(e) => setMenuId(e.value)} options={arrMenu} optionLabel="name"
                              placeholder="Select Menu" className="w-full md:w-14rem" />
                  </div>
                </div>
              </div>
              <div className="col-4 md:col-4">
                <Button label="Tambah" style={{ marginRight: '10px' }} onClick={() => {
                  alert(nama + menuId.code)
                  axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/user-group`, {
                    "nama":nama,
                    "menuId":menuId.code
                  }, {
                    headers: {
                      Authorization: Cookies.get('admin_token')
                    }
                  }).then((res) => {
                    alert('Succesfully adding new User Group!')
                    // resetStateInput()
                  }).catch((error) => {
                    alert('Failed adding new User Group')
                    // resetStateInput()
                  })
                }}></Button>
                <Button label="Ubah" severity="warning" style={{ marginRight: '10px' }}></Button>
                <Button label="Hapus" severity="danger"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default daftargroupuser;