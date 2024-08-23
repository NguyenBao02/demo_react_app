import { FaChartArea } from 'react-icons/fa';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

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
                        <SubMenu label="Charts" icon={<FaChartArea />}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Charts" icon={<FaChartArea />}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Charts" icon={<FaChartArea />}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
            </Sidebar>
        </div>
    )
}

export default SideBar;