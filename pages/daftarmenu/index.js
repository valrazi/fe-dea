import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber'
import { PrimeIcons } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';



function daftarmenu() {
  const [keyword, setKeyword] = useState('');
  const [globalFilter, setGlobalFilter] = useState(null);

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  const handleGroupFilter = (group) => {
    console.log('Filtering by group:', group);
  };

  const [arrMenu, setArrMenu] = useState([]);


  React.useEffect(() => {
    if(!Cookies.get('admin_token')) {
      Router.push('/latihan2')
    }
    async function listMenu() {
      const listMenu = await axios.get(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/menu`, {
        headers: {
          Authorization: Cookies.get('admin_token')
        }
      })
      setArrMenu(listMenu.data.data)
    }
    listMenu()
  })

  const isOnList = [
    { name: 'Off', code: 0 },
    { name: 'On', code: 1 },
  ];
  const [namaMenu, setNamaMenu] = useState('');
  const [linkMenu, setLinkMenu] = useState('');
  const [iconMenu, setIconMenu] = useState('');
  const [urutanMenu, setUrutanMenu] = useState(0);
  const [isOn, setIsOn] = useState('');

  function resetStateInput() {
    setNamaMenu('')
    setLinkMenu('')
    setIconMenu('')
    setUrutanMenu('')
    setIsOn('')
  }
  function deleteMenu(menuId) {
    axios.delete(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/menu/${menuId}`, {
      headers: {
        Authorization: Cookies.get('admin_token')
      }
    }).then(() => {
      alert(`Menu with ID ${menuId} succesfully deleted!`)
    }).catch((error) => {
      alert('Delete Failed')
      console.log(error);
    })
  }

  return (
    <div className="grid justify-center">
      <h5>Data Menu</h5>
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
            <div>
            </div>
            <table className="min-w-full bg-white rounded-md">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Kode</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Uraian Menu</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Link</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Icon</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Order</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">On Off</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Edit</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Delete</th>
                </tr>
              </thead>
              <tbody>
                {arrMenu.map(menu => <tr key={menu.id}>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{menu.id}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{menu.nama}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{menu.link}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{menu.icon}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{menu.order}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{menu.isOn}</td>

                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity='info' label='Edit'></Button>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity="danger" label='Delete' onClick={() => {
                      deleteMenu(menu.id)
                    }}></Button>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid justify-center">
          <h5>Form Daftar Menu</h5>
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

                <div className="col-12">
                  <div className="card">
                    <div className="p-fluid formgrid grid">
                      <div className="field col-12">

                        <div className="field grid">
                          <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Uraian
                          </label>
                          <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" value={namaMenu} onInput={(e) => setNamaMenu(e.target.value)} />
                          </div>
                        </div>

                        <div className="field grid">
                          <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Link
                          </label>
                          <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" value={linkMenu} onInput={(e) => setLinkMenu(e.target.value)} />
                          </div>
                        </div>

                        <div className="field grid">
                          <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Icon
                          </label>
                          <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" value={iconMenu} onInput={(e) => setIconMenu(e.target.value)} />
                          </div>
                        </div>

                        <div className="field grid">
                          <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Urutan
                          </label>
                          <div className="col-12 md:col-10">
                            <InputNumber id="email3" type="text" value={urutanMenu} onValueChange={(e) => setUrutanMenu(e.value)} />
                          </div>
                        </div>

                        <div className="field grid">
                          <label htmlFor="is_on" className="col-12 mb-2 md:col-2 md:mb-0">
                            On Off
                          </label>
                          <div className="col-12 md:col-10">
                            {/* <Dropdown id="is_on" value={isOn} onChange={(e) => setIsOn(e.value)} options={isOnList} placeholder="Select Is ON"></Dropdown>   */}
                            <Dropdown value={isOn} onChange={(e) => setIsOn(e.value)} options={isOnList} optionLabel="name"
                              placeholder="Select On/Off" className="w-full md:w-14rem" />
                          </div>
                        </div>

                        <div>
                          <div className="col-2 md:col-2">
                            <Button label="Tambah" onClick={() => {
                              axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/menu`, {
                                nama: namaMenu,
                                link: linkMenu,
                                icon: iconMenu,
                                order: urutanMenu,
                                isOn: isOn.code
                              }, {
                                headers: {
                                  Authorization: Cookies.get('admin_token')
                                }
                              }).then((res) => {
                                alert('Succesfully adding new Menu!')
                                resetStateInput()
                              }).catch((error) => {
                                alert('Failed adding new menu')
                                resetStateInput()
                              })
                            }}></Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid justify-center">
              <h5>Ubah Hapus Menu</h5>
              <div className="col-12 edit-menu">
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
                          <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Uraian Menu</th>
                          <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Link</th>
                          <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Icon</th>
                          <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Order</th>
                          <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">On Off</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">010000</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">Administrator</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">-</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">cubes</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">0</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">1</td>
                        </tr>
                        <tr>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">010100</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">Control Panel</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">-</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">cogs</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">0</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">1</td>
                        </tr>
                        <tr>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">010101</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">Manajemen User</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">admin_panel/admin_user</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">users</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">0</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">1</td>
                        </tr>
                        <tr>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">010102</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">User Group</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">admin_panel/admin_user_group</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">object-group</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">0</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">1</td>
                        </tr>
                        <tr>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">010103</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">Menu Sidebar</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">admin_panel/admin_menu</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">th-list</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">0</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">1</td>
                        </tr>
                        <tr>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">010104</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">Struktur Organisasi</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">admin_panel/admin_so</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">stemap</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">0</td>
                          <td className="border-b border-gray-200 px-4 py-2 text-center">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12">
                    <div className="card">
                      <div className="p-fluid formgrid grid">
                        <div className="field col-12">
                          <div className="field grid">
                            <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                              Kode
                            </label>
                            <div className="col-12 md:col-10">
                              <InputText id="name3" type="text" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                              Uraian
                            </label>
                            <div className="col-12 md:col-10">
                              <InputText id="email3" type="text" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                              Link
                            </label>
                            <div className="col-12 md:col-10">
                              <InputText id="email3" type="text" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                              Icon
                            </label>
                            <div className="col-12 md:col-10">
                              <InputText id="email3" type="text" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                              Urutan
                            </label>
                            <div className="col-12 md:col-10">
                              <InputText id="email3" type="text" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                              Keterangan
                            </label>
                            <div className="col-12 md:col-10">
                              <InputText id="email3" type="text" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                              On Off
                            </label>
                            <div className="col-12 md:col-10">
                              <InputText id="email3" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 md:col-4">
                        <Button label="Ubah" severity="warning" style={{ marginRight: '10px' }}></Button>
                        <Button label="Hapus" severity="danger"></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default daftarmenu;
