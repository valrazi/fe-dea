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
                        <label htmlFor="userid" className="block text-900 text-xl font-medium mb-2">
                        User ID
                        </label>
                        <InputText inputid="userid" type="text" placeholder="user id" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="namauser" className="block text-900 text-xl font-medium mb-2">
                            Nama User
                        </label>
                        <InputText inputid="namauser" type="text" placeholder="nama user" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="nip" className="block text-900 text-xl font-medium mb-2">
                            NIP [Organisasi]
                        </label>
                        <InputText inputid="nip" type="text" placeholder="nip" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                            Email
                        </label>
                        <InputText inputid="email" type="text" placeholder="email" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div>
                        <label htmlFor="usergroup" className="block text-900 text-xl font-medium mb-2">
                            User Group
                        </label>
                        <InputText inputid="usergroup" type="text" placeholder="user group" className="w-full md:w-27rem mb-5" style={{ padding: '1rem' }} />
                    </div>

                    <div className="col-4 md:col-4">
                        <Button label="Tambah" icon="pi pi-check-circle"></Button>
                    </div>
                    <div className="col-4 md:col-4">
                        <Button label="Ubah" icon="pi pi-check" severity="warning"></Button>
                    </div>
                    <div className="col-4 md:col-4">
                        <Button label="Hapus" icon="pi pi-trash" severity="danger"></Button>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
  <div className="card p-fluid">
    <div className="border-1 surface-border border-round m-1 text-center py-5">
      <img src="/demo/images/login/user.png" alt="Image" height="170" className="mb-2" />
      <h5>Profile</h5>      
    </div>
  </div>
</div>

        </div>
    );
};

export default rekamuser;