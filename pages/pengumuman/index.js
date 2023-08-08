import React, { use, useState } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Dialog } from 'primereact/dialog';
import Router from 'next/router';


function pengumuman() {
  const [keyword, setKeyword] = useState('');
  const [globalFilter, setGlobalFilter] = useState(null);

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  const handleGroupFilter = (group) => {
    console.log('Filtering by group:', group);
  };

  const [title, setTitle] = useState('')

  const [gambar, setGambar] = useState('')

  const [message, setMessage] = useState('')

  const [link, setLink] = useState('')


  const [arrPengumuman, setArrPengumuman] = useState([]);
  React.useEffect(() => {
    if (!Cookies.get('admin_token')) {
      Router.push('/login')
    }
    async function listPengumuman() {
      const listPengumuman = await axios.get(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/pengumuman`, {
        headers: {
          Authorization: Cookies.get('admin_token')
        }
      })
      setArrPengumuman(listPengumuman.data.data)
    }
    listPengumuman()
  })

  function resetStateInput() {
    setTitle('')
    setGambar('')
    setMessage('')
    setLink('')
  }

  function deleteSO(soID) {
    axios.delete(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/pengumuman/${soID}`, {
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
  const [ePengumumanId, setPengumumanId] = useState('')
  const [eTitle, setEditTitle] = useState('')

  const [eGambar, setEditGambar] = useState('')

  const [eMessage, setEditMessage] = useState('')

  const [eLink, setEditLink] = useState(0)

  
  function editeSO(pengumuman) {
    setEditVisible(true)
    setPengumumanId(pengumuman.id)
    setEditTitle(pengumuman.title)
    setEditGambar(pengumuman.gambar)
    setEditMessage(pengumuman.message)
    setEditLink(pengumuman.link)
  }

  function editSOAPI() {
    axios.put(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/pengumuman/${ePengumumanId}`, {
      title: eTitle,
      gambar: eGambar,
      message: eMessage,
      link: eLink,
    }, {
      headers: {
        Authorization: Cookies.get('admin_token')
      }
    }).then((res) => {
      alert(`SO with ID ${ePengumumanId} succesfully updated!`)
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
                        Title
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={eTitle} onInput={(e) => setEditTitle(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                        Gambar
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={eGambar} onInput={(e) => setEditGambar(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                      Message
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={eMessage} onInput={(e) => setEditMessage(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                      Link
                      </label>

                      <div className="col-12 md:col-10">
                      <InputText id="email3" type="text"
                          value={eLink} onInput={(e) => setEditLink(e.target.value)} />
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
      <h5>Pengumuman</h5>
      <div className="col-12">
        <div className="card">
         

          <div>
            <Button icon={PrimeIcons.PLUS} className="p-button-success" style={{ marginRight: '5px' }} />
            <Button icon="pi pi-search" onClick={handleSearch} />
            <InputText type="search" onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
          </div>

          <div style={{ marginTop: '20px' }}>
            <table className="min-w-full bg-white rounded-md">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Title</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Message</th>

                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Gambar</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Link</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Edit</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Delete</th>
                </tr>
              </thead>
              <tbody>
                {arrPengumuman.map(pengumuman => <tr key={pengumuman.id}>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{pengumuman.title}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{pengumuman.message}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center"><img className='w-5' src={pengumuman.gambar}></img></td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{pengumuman.link}</td>

                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity='warning' label='Edit' onClick={() => {
                      editeSO(pengumuman)
                    }}></Button>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">
                    <Button severity="danger" label='Delete' onClick={() => {
                      deleteSO(pengumuman.id)
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
                        Title
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={title} onInput={(e) => setTitle(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                      Gambar
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={gambar} onInput={(e) => setGambar(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                      Message
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={message} onInput={(e) => setMessage(e.target.value)} />
                      </div>
                    </div>
                    <div className="field grid">
                      <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                      Link
                      </label>

                      <div className="col-12 md:col-10">
                      <InputText id="email3" type="text"
                          value={link} onInput={(e) => setLink(e.target.value)} />
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="col-4 md:col-4">
                  <Button label="Tambah"
                    onClick={() => {
                      axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/pengumuman`, {
                        "title": title,
                        "gambar": gambar,
                        "message": message,
                        "link": link
                      }, {
                        headers: {
                          Authorization: Cookies.get('admin_token')
                        }
                      }).then((res) => {
                        alert('Succesfully adding new pengumuman!')
                        resetStateInput()
                      }).catch((error) => {
                        console.log(error);
                        alert('Failed adding new pengumuman')
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

export default pengumuman;