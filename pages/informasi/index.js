import React, { use, useState } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Dialog } from 'primereact/dialog';


function informasi() {
  const [keyword, setKeyword] = useState('');
  const [globalFilter, setGlobalFilter] = useState(null);

  const handleSearch = () => {
    console.log('Searching for:', keyword);
  };

  const handleGroupFilter = (group) => {
    console.log('Filtering by group:', group);
  };

  const [message, setMessage] = useState('')



  const [arrSO, setArrSO] = useState([]);
  React.useEffect(() => {
    if (!Cookies.get('admin_token')) {
      Router.push('/login')
    }
    async function listSO() {
      const listMenu = await axios.get(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/informasi`, {
        headers: {
          Authorization: Cookies.get('admin_token')
        }
      })
      setArrSO(listMenu.data.data)
    }
    listSO()
  })

  function resetStateInput() {
    setMessage('')
  }

  function deleteSO(soID) {
    axios.delete(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/informasi/${soID}`, {
      headers: {
        Authorization: Cookies.get('admin_token')
      }
    }).then(() => {
      alert(`Informasi with ID ${soID} succesfully deleted!`)
    }).catch((error) => {
      alert('Delete Failed')
      console.log(error);
    })
  }

  const [editVisible, setEditVisible] = useState(false)
  const [eSOId, setEditSOId] = useState('')

  const [eMessage, setEditMessage] = useState('')


  
  function editeSO(SO) {
    setEditVisible(true)
    setEditSOId(SO.id)
    setEditMessage(SO.message)
  }

  function editSOAPI() {
    axios.put(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/informasi/${eSOId}`, {
      message: eMessage
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
                      Message
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={eMessage} onInput={(e) => setEditMessage(e.target.value)} />
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
      <h5>Informasi</h5>
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
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Message</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Date</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Edit</th>
                  <th className="border-b border-gray-200 px-4 py-2 bg-blue-600 text-white">Delete</th>
                </tr>
              </thead>
              <tbody>
                {arrSO.map(SO => <tr key={SO.id}>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{SO.message}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-center">{SO.date}</td>

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
                      Message
                      </label>

                      <div className="col-12 md:col-10">
                        <InputText id="email3" type="text"
                          value={message} onInput={(e) => setMessage(e.target.value)} />
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                <div className="col-4 md:col-4">
                  <Button label="Tambah"
                    onClick={() => {
                      axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/admin/informasi`, {
                        "message": message
                      }, {
                        headers: {
                          Authorization: Cookies.get('admin_token')
                        }
                      }).then((res) => {
                        alert('Succesfully adding new Informasi!')
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

export default informasi;