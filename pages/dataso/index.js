import React, { use, useState } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Dialog } from 'primereact/dialog';


function dataso() {
  const [keyword, setKeyword] = useState('');
  const [globalFilter, setGlobalFilter] = useState(null);

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  const handleGroupFilter = (group) => {
    console.log('Filtering by group:', group);
  };

  const [kodeHris, setKodeHris] = useState('')

  const [Uraian, setUraian] = useState('')

  const [tagSurat, setTagSurat] = useState('')

  const [intern, setIntern] = useState(0)

  const [ekstern, setEkstern] = useState(0)

  const [shortOrg, setShortOrg] = useState('')

  const [arrSO, setArrSO] = useState([]);
  React.useEffect(() => {
    if (!Cookies.get('admin_token')) {
      Router.push('/login')
    }
    async function listSO() {
      const listMenu = await axios.get(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/so`, {
        headers: {
          Authorization: Cookies.get('admin_token')
        }
      })
      setArrSO(listMenu.data.data)
    }
    listSO()
  })

  function resetStateInput() {
    setKodeHris('')
    setUraian('')
    setTagSurat('')
    setIntern('')
    setEkstern('')
    setShortOrg('')
  }

  function deleteSO(soID) {
    axios.delete(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/so/${soID}`, {
      headers: {
        Authorization: Cookies.get('admin_token')
      }
    }).then(() => {
      alert(`SO with ID ${soID} succesfully deleted!`)
    }).catch((error) => {
      alert('Delete Failed')
      console.log(error);
    })
  }

  const [editVisible, setEditVisible] = useState(false)
  const [eSOId, setEditSOId] = useState('')
  const [eKodeHris, setEditKodeHris] = useState('')

  const [eUraian, setEditUraian] = useState('')

  const [eTagSurat, setEditTagSurat] = useState('')

  const [eIntern, setEditIntern] = useState(0)

  const [eEkstern, setEditEkstern] = useState(0)

  const [eShortOrg, setEditShortOrg] = useState('')
  function editeSO(SO) {
    setEditVisible(true)
    setEditSOId(SO.id)
    setEditKodeHris(SO.kode_hris)
    setEditUraian(SO.uraian)
    setEditTagSurat(SO.tag_surat)
    setEditIntern(SO.intern)
    setEditEkstern(SO.ekstern)
    setEditShortOrg(SO.short_org)
  }

  function editSOAPI() {
    axios.put(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/so/${eSOId}`, {
      kode_hris: eKodeHris,
      uraian: eUraian,
      tag_surat: eTagSurat,
      intern: eIntern,
      ekstern: eEkstern,
      short_org: eShortOrg
    }, {
      headers: {
        Authorization: Cookies.get('admin_token')
      }
    }).then((res) => {
      alert(`SO with ID ${eSOId} succesfully updated!`)
      setEditVisible(false)
    }).catch((error) => {
      alert('Update Failed')
      setEditVisible(false)
      console.log(error);
    })
  }
  return (
    <div className="grid justify-center">
      <Dialog header="Edit Menu" visible={editVisible}
              style={{ width: '50vw' }} onHide={() => setEditVisible(false)}>
              <div className="col-12">
              <div className="card">
                <div className="p-fluid formgrid grid">
                  <div className="field col-12">
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Kode HRIS
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={eKodeHris} onInput={(e) => setEditKodeHris(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Uraian
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={eUraian} onInput={(e) => setEditUraian(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Tag Surat
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={eTagSurat} onInput={(e) => setEditTagSurat(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Intern
                      </label>

                      <div className="col-12 md:col-10">
                        <InputNumber id="email3" type="text"
                          value={eIntern} onValueChange={(e) => setEditIntern(e.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Ekstern
                      </label>

                      <div className="col-12 md:col-10">
                        <InputNumber id="email3" type="text"
                          value={eEkstern} onValueChange={(e) => setEditEkstern(e.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Short Org.
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={eShortOrg} onInput={(e) => setEditShortOrg(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 md:col-4">
                  <Button label="Edit"
                    onClick={() => {
                      editSOAPI()
                      
                    }}></Button>
                </div>
              </div>
            </div>
            </Dialog>
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
            <Button icon={PrimeIcons.PLUS} className="p-button-success" style={{ marginRight: '5px' }} />
            <Button icon="pi pi-search" onClick={handleSearch} />
            <InputText type="search" onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
          </div>

          <div style={{ marginTop: '20px' }}>
            <table className="min-w-full bg-white rounded-md">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Kode HRIS</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Uraian Struktur Organisasi</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Kode Surat</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Intern</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Ekstern</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Short</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Edit</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Delete</th>
                </tr>
              </thead>
              <tbody>
                {arrSO.map(SO => <tr key={SO.id}>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{SO.kode_hris}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{SO.uraian}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{SO.tag_surat}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{SO.intern}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{SO.ekstern}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{SO.short_org}</td>

                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity='warning' label='Edit' onClick={() => {
                      editeSO(SO)
                    }}></Button>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity="danger" label='Delete' onClick={() => {
                      deleteSO(SO.id)
                    }}></Button>
                  </td>
                </tr>)}
              </tbody>
            </table>
            <div className="col-12">
              <div className="card">
                <div className="p-fluid formgrid grid">
                  <div className="field col-12">
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Kode HRIS
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={kodeHris} onInput={(e) => setKodeHris(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Uraian
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={Uraian} onInput={(e) => setUraian(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Tag Surat
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={tagSurat} onInput={(e) => setTagSurat(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Intern
                      </label>

                      <div className="col-12 md:col-10">
                        <InputNumber id="email3" type="text"
                          value={intern} onValueChange={(e) => setIntern(e.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Ekstern
                      </label>

                      <div className="col-12 md:col-10">
                        <InputNumber id="email3" type="text"
                          value={ekstern} onValueChange={(e) => setEkstern(e.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Short Org.
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={shortOrg} onInput={(e) => setShortOrg(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 md:col-4">
                  <Button label="Tambah"
                    onClick={() => {
                      axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/so`, {
                        "kode_hris": kodeHris,
                        "uraian": Uraian,
                        "tag_surat": tagSurat,
                        "intern": intern,
                        "ekstern": ekstern,
                        "short_org": shortOrg
                      }, {
                        headers: {
                          Authorization: Cookies.get('admin_token')
                        }
                      }).then((res) => {
                        alert('Succesfully adding new SO!')
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
  );
}

export default dataso;