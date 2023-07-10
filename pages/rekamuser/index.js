import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

const rekamuser = () => {
    const [password, setPassword] = useState('');

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h4>User Profile</h4>
                    <p>Data User</p>
 
                    <div>
                        <label htmlFor="nama" className="block text-900 text-xl font-medium mb-2">
                            Nama
                        </label>
                        <InputText inputid="nama" type="text" placeholder="Nama" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="namalengkap" className="block text-900 text-xl font-medium mb-2">
                            Nama Lengkap
                        </label>
                        <InputText inputid="namalengkap" type="text" placeholder="Nama Lengkap" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="nip" className="block text-900 text-xl font-medium mb-2">
                            NIP [Organisasi]
                        </label>
                        <InputText inputid="nip" type="text" placeholder="NIP" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="pangkat" className="block text-900 text-xl font-medium mb-2">
                            Pangkat
                        </label>
                        <InputText inputid="pangkat" type="text" placeholder="Pangkat" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="golongan" className="block text-900 text-xl font-medium mb-2">
                            Golongan
                        </label>
                        <InputText inputid="golongan" type="text" placeholder="Golongan" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="kode" className="block text-900 text-xl font-medium mb-2">
                            Kode SO
                        </label>
                        <InputText inputid="kode" type="text" placeholder="Kode SO" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                            Email 
                        </label>
                        <InputText inputid="email" type="text" placeholder="Email" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="handphone" className="block text-900 text-xl font-medium mb-2">
                            No. Selular (HP)
                        </label>
                        <InputText inputid="handphone" type="text" placeholder="No. Handphone" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="usergroup" className="block text-900 text-xl font-medium mb-2">
                            User Group
                        </label>
                        <InputText inputid="usergroup" type="text" placeholder="User Group" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="jabatan" className="block text-900 text-xl font-medium mb-2">
                            Jabatan
                        </label>
                        <InputText inputid="jabatan" type="text" placeholder="Jabatan" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="eselon" className="block text-900 text-xl font-medium mb-2">
                            Eselon
                        </label>
                        <InputText inputid="eselon" type="text" placeholder="Eselon" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>
                    <Button label="Rekam"></Button>
                </div>
            </div>

            <div className="col-12 md:col-6">
  <div className="card p-fluid">
    <div className="border-1 surface-border border-round m-1 text-center py-5">
      <img src="/demo/images/login/user.png" alt="Image" height="170" className="mb-2" />
      <h5>Profile</h5>
      <div className="formgroup-inline">
        <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
          Nama
        </label>
        <div className="col-12 md:col-9">
          <InputText id="name3" type="text" />
        </div>
      </div>
      <div className="formgroup-inline">
        <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
          Email
        </label>
        <div className="col-12 md:col-9">
          <InputText id="email3" type="text" />
        </div>
      </div>
      <div className="button-group d-flex justify-content-center">
        <div className="col-4 md:col-4">
          <Button label="Rekam"></Button>
        </div>
        <div className="col-4 md:col-4">
          <Button label="Ubah" icon="pi pi-check" severity="warning"></Button>
        </div>
        <div className="col-4 md:col-4">
          <Button label="Hapus" icon="pi pi-trash" severity="danger"></Button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default rekamuser;