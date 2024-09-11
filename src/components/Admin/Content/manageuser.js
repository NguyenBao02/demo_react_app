import ModalCreateUser from "./Modal/modalCreateUser";
import { FcPlus } from "react-icons/fc";
import "../../../assets/scss/manageuser.scss"
import TableUser from "./tableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../service/apiService";
import ModalUpdateUser from "./Modal/modalUpdateUser";
import ModalViewUser from "./Modal/modalViewUser";
import ModalDeleteUser from "./Modal/modalDeleteUser";


const ManageUser = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [showViewUser, setShowViewUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [userDataUpdate, setUserDataUpdate] = useState({});
    const [userDataView, setUserDataView] = useState({});
    const [userDataDelete, setUserDataDelete] = useState({});

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        let res = await getAllUsers();
        if (res.status) {
            setListUsers(res.data);
        }
    }

    const handleBtnUpdate = (user) => {
        setShowUpdateUser(true);
        setUserDataUpdate(user);
    }

    const resetDataUser = () => {
        setUserDataUpdate({});
        setUserDataView({});
    }

    const handleBtnView = (item) => {
        setShowViewUser(true);
        setUserDataView(item);
    }

    const handleBtnDelete = (item) => {
        setShowDeleteUser(true);
        setUserDataDelete(item)
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button onClick={() => setShowCreateModal(true)} className="btn btn-primary"><FcPlus /> Add New User</button>
                </div>
                <div className="table-user-container">
                    <TableUser handleBtnDelete={handleBtnDelete} handleBtnView={handleBtnView} handleBtnUpdate={handleBtnUpdate} listUsers={listUsers} />
                </div>
                <ModalCreateUser show={showCreateModal} setShow={setShowCreateModal} fetchAllUsers={fetchAllUsers} />
                <ModalUpdateUser resetDataUser={resetDataUser} userDataUpdate={userDataUpdate} show={showUpdateUser} setShow={setShowUpdateUser} fetchAllUsers={fetchAllUsers} />
                <ModalViewUser resetDataUser={resetDataUser} userDataView={userDataView} show={showViewUser} setShow={setShowViewUser} />
                <ModalDeleteUser show={showDeleteUser} setShow={setShowDeleteUser} userDataDelete={userDataDelete} fetchAllUsers={fetchAllUsers} />
            </div>
        </div>
    )
}

export default ManageUser;