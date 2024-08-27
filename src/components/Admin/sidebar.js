import { FaChartArea } from 'react-icons/fa';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const { collapsed } = props;

    return (
        <div>
            <Sidebar collapsed={collapsed}>
                <div className='sidebar-header'>
                    <p>Pro Sidebar</p>
                </div>
                <div className='sidebar-content'>
                    <p style={{ opacity: collapsed ? 0 : 0.7 }}>General</p>
                    <Menu>
                        <MenuItem component={<Link to="/admin" />} icon={<FaChartArea />}> Dashboard </MenuItem>
                        <SubMenu label="Features" icon={<FaChartArea />}>
                            <MenuItem component={<Link to="manage-user" />}> Quản lý Users </MenuItem>
                            <MenuItem> Quản lý bài Quizz </MenuItem>
                            <MenuItem> Quản lý Câu Hỏi </MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
            </Sidebar>
        </div>
    )
}

export default SideBar;