import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postUpdateUser } from '../../../../service/apiService';

const ModalUpdateUser = (props) => {
    const { show, setShow, fetchAllUsers, userDataUpdate, resetDataUser } = props;
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("");
        setImage("");
        setPreview("");
        resetDataUser();
    }

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");

    const handleImage = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    }

    const handleSubmitUpdateUser = async () => {
        let res = await postUpdateUser(id, username, role, image);

        if (res.status) {
            handleClose();
            toast.success(res.message);
            fetchAllUsers();
        }
    }

    useEffect(() => {
        setId(userDataUpdate.id);
        setEmail(userDataUpdate.email);
        setPassword("");
        setUsername(userDataUpdate.username);
        setRole(userDataUpdate.role);
        setImage("");
        if (userDataUpdate.image) {
            setPreview(`http://127.0.0.1:8000/images/` + userDataUpdate.image);
        }
    }, [userDataUpdate])

    return (
        <>
            <Modal backdrop="static" size="lg" show={show} onHide={handleClose} className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Update a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nguyen Quoc Bao" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(e) => setRole(e.target.value)} value={role}>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus /> Upload File Image
                            </label>
                            <input type='file' id='labelUpload' hidden onChange={(e) => handleImage(e)} />
                        </div>
                        <div className='col-md-12 image-preview'>
                            {preview
                                ?
                                <img src={preview} />
                                :
                                <span>No Image</span>
                            }

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;