import { useState } from "react";
import ModalCreateUser from "./Modal/modalCreateUser";
import { FcPlus } from "react-icons/fc";
import "../../../assets/scss/manageuser.scss"

const ManageUser = () => {
    const [show, setShow] = useState(false);

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
                    Table User
                    <ModalCreateUser show={show} setShow={setShow} />
                </div>
            </div>
        </div>
    )
}

export default ManageUser;