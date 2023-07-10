import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

function dataso() {
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
      <h5>Data SO</h5>
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
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Kode</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Uraian Struktur Organisasi</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Kode Surat</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Intern</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Ekstern</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Short</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">000000</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Direktorat Jenderal Anggaran</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">00</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">0000</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center"></td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">DJA</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">010000</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Sekretariat Direktorat Jenderal</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">10</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">8152</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">021-3866117</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">SEKRETARIAT</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">010100</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Bagian Organisasi dan Tata Laksana</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">10</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">8017</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">021-3509459</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">010101</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Subbagian Organisasi</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">10</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">8018</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">021-34357018</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">010102</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Subbagian Tata Laksana</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">10</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">8019</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">021-34357009</td>
              </tr>
            </tbody>
           </table>
        </div>
        </div>
        
        <div className="grid justify-center">
      <h5>Ubah Hapus SO</h5>
    </div>
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
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Uraian Struktur Organisasi</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Kode Surat</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Intern</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Ekstern</th>
                <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Short</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2 text-center">000000</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Direktorat Jenderal Anggaran</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">00</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">0000</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center"></td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">DJA</td>
              </tr>
              <tr>
              <td className="border-b border-gray-200 px-4 py-2 text-center">010000</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Sekretariat Direktorat Jenderal</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">10</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">8152</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">021-3866117</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">SEKRETARIAT</td>
              </tr>
              <tr>
              <td className="border-b border-gray-200 px-4 py-2 text-center">010100</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Bagian Organisasi dan Tata Laksana</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">10</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">8017</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">021-3509459</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center"></td>
              </tr>
              <tr>
              <td className="border-b border-gray-200 px-4 py-2 text-center">010101</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Subbagian Organisasi</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">10</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">8018</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">021-34357018</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center"></td>
              </tr>
              <tr>
              <td className="border-b border-gray-200 px-4 py-2 text-center">010102</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">Subbagian Tata Laksana</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">10</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">8019</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center">021-34357009</td>
                <td className="border-b border-gray-200 px-4 py-2 text-center"></td>
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
                Kode HRIS
                </label>
            <div className="col-12 md:col-10">
                <InputText id="email3" type="text" />
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
                Tag Surat
                </label>
            <div className="col-12 md:col-10">
                <InputText id="email3" type="text" />
            </div>
                    </div>
                    <div className="field grid">
                <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Intern
                </label>
            <div className="col-12 md:col-10">
                <InputText id="email3" type="text" />
            </div>
                    </div>
                    <div className="field grid">
                <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Ekstern
                </label>
            <div className="col-12 md:col-10">
                <InputText id="email3" type="text" />
            </div>
                    </div>
                    <div className="field grid">
                <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Short Org.
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
          </div></div></div></div>
 </div>
  );
}

export default dataso;