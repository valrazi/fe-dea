import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

function daftaruser() {
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
    <h5>Data User</h5>
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
            <Button icon={PrimeIcons.PLUS} className="p-button-success" style={{ marginRight: '5px' }}/>
                <Button icon="pi pi-search" onClick={handleSearch}/>
                <InputText type="search" onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </div>

      <div style= {{ marginTop: '20px' }}>
        <table className="min-w-full bg-white rounded-md">
            <thead>
              <tr>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">User ID</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Nama User</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">NIP [Organisasi]</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Email</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">User Group</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">123456</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">John Doe</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">784586234434345</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">johndoe@kemenkeu.go.id</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">DJA</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">782646</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Jane Smith</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">927354235454363</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">janesmith@kemenkeu.go.id</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">DJA TU stol_admin DJA-Pejabat</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">352634</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Mike Johnson</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">253463423545467</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">mikejohnson@gmail.com</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Dirjen Admin-DSW DJA Kepegawaian TU stol_admin fhm DJA-Pejabat</td>
              </tr>
            </tbody>
           </table>
        </div>
      </div>
        
      </div>
    </div>
  );
}

export default daftaruser;