const TableUser = (props) => {
    const { listUsers } = props;

    return (
        <>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length <= 0
                        ?
                        <tr>
                            <td colSpan={5}>No Users Data</td>
                        </tr>
                        :
                        listUsers.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button className="btn btn-warning mx-3">Update</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
};

export default TableUser;