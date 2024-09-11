import ModalCreateUser from "./Modal/modalCreateUser";
import { FcPlus } from "react-icons/fc";
import "../../../assets/scss/manageuser.scss"
import TableUser from "./tableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../service/apiService";


const ManageUser = () => {
    const [show, setShow] = useState(false);
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        let res = await getAllUsers();
        if (res.status) {
            setListUsers(res.data);
        }
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button onClick={() => setShow(!show)} className="btn btn-primary"><FcPlus /> Add New User</button>
                </div>
                <div className="table-user-container">
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateUser show={show} setShow={setShow} fetchAllUsers={fetchAllUsers} />
            </div>
        </div>
    )
}

export default ManageUser;