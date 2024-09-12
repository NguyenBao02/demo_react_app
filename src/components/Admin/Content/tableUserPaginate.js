import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
    const { listUsers, handleBtnUpdate, handleBtnView, handleBtnDelete, fetchAllUsersWithPaginate, pageConut } = props;

    const handlePageClick = (event) => {
        fetchAllUsersWithPaginate(+event.selected + 1);
    };
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
                                        <button className="btn btn-secondary" onClick={() => handleBtnView(item)}>View</button>
                                        <button className="btn btn-warning mx-3" onClick={() => handleBtnUpdate(item)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => handleBtnDelete(item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageConut}
                previousLabel="< Prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    )
};

export default TableUserPaginate;