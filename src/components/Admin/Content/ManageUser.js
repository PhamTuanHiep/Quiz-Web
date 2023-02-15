import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage
                <div className="user-content">
                    <div>
                        <button>Add new users</button>
                    </div>
                    <div>
                        table user
                    </div>
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;