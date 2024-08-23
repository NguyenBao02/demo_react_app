import SideBar from "./sidebar";
import "../../assets/scss/admin.scss";
import { FaBars } from "react-icons/fa"
import { useState } from "react";


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container d-flex">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>

            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)} />
            </div>
        </div>
    )
};

export default Admin;