import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { PrimeIcons } from 'primereact/api';

function daftargroupuser() {
  const [keyword, setKeyword] = useState('');
  const [globalFilter, setGlobalFilter] = useState(null);

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  const handleGroupFilter = (group) => {
    console.log('Filtering by group:', group);
  };

  return (
    <div className="grid justify-center">
      <h5>Data User Group</h5>
      <div className="col-12">
        <div className="card">
          <div className="flex justify-between mb-4">
          <div>
            <Button icon={PrimeIcons.PLUS} className="p-button-success" style={{ marginRight: '5px' }}/>
            <Button icon="pi pi-search" onClick={handleSearch}/>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">001</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Admin-DSW</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">784586234434345</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">002</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Super-User</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">927354235454363</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">003</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Spesial-User</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">253463423545467</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">004</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Reset User Pass</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">253463423545467</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">005</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Admin User DSW</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">253463423545467</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">006</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Dirjen</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">253463423545467</td>
              </tr>
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
                        <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Kode
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="name3" type="text" />
                        </div>
                    </div>
                    <div className="field grid">
                        <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                             User Group
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" />
                        </div>
                    </div>
                    <div className="field grid">
                        <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Menu
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" />
                        </div>
                    </div>
                    </div>
                    <div className="col-4 md:col-4">
                    <Button label="Tambah" style={{ marginRight: '10px' }}></Button>
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