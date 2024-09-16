import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postDeleteUser } from '../../../../service/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, userDataDelete, fetchAllUsersWithPaginate } = props;
    const handleClose = () => setShow(false);

    const handleBtnSubmit = async () => {
        let res = await postDeleteUser(userDataDelete.id);

        if (res.status) {
            handleClose();
            toast.success(res.message);
            fetchAllUsersWithPaginate(1);
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete A User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa user <b>{userDataDelete.username}</b> không ???</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleBtnSubmit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDeleteUser;