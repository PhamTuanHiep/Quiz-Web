import { useState, useEffect } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FETCH_USER_LOGIN_SUCCESS } from "../../../../redux/action/userAction";
import {
  getAllQuizForAdmin,
  getAllUsers,
  postAssignQuiz,
} from "../../../../services/apiService";

const AssignQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetchQuiz();
    fetchUser();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      let newQuiz = res.DT.map((item) => {
        return {
          value: item.id,
          label: `${item.id} - ${item.name} `,
        };
      });
      setListQuiz(newQuiz);
    }
  };

  const fetchUser = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      let users = res.DT.map((item) => {
        return {
          value: item.id,
          label: `${item.id} - ${item.username} - ${item.email} `,
        };
      });
      setListUser(users);
    }
  };

  const handleAssignQuiz = async () => {
    let rs = await postAssignQuiz(selectedQuiz.value, selectedUser.value);
    if (rs && rs.EC === 0) {
      toast.success(rs.EM);
    } else {
      toast.error(rs.EM);
    }
  };

  return (
    <div className="assign-quiz-container row">
      <div className="col-6 form-group">
        <label className="mb-2">Select Quiz:</label>
        <Select
          value={selectedQuiz}
          onChange={setSelectedQuiz}
          options={listQuiz}
        />
      </div>
      <div className="col-6 form-group">
        <label className="mb-2">Select User:</label>
        <Select
          value={selectedUser}
          onChange={setSelectedUser}
          options={listUser}
        />
      </div>
      <div>
        <button
          onClick={() => {
            handleAssignQuiz();
          }}
          className="btn btn-warning mt-3"
        >
          Assign
        </button>
      </div>
    </div>
  );
};
export default AssignQuiz;
