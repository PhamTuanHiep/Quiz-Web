import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";
import { Tab } from "bootstrap";
import { Tabs } from "react-bootstrap";
const ModalProfile = (props) => {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleSubmitCreateUser = async () => {
    // validate
    // let data = await postCreateNewUser(email, password, username, role, image);
    // if (data && data.EC === 0) {
    //   toast.success(data.EM);
    handleClose();
    //   // await props.fetchListUsers();
    //   props.setCurrentPage(1); //về trang 1
    //   await props.fetchListUsersWithPaginate(1);
    // }
    // if (data && data.EC !== 0) {
    //   toast.error(data.EM);
    // }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Main Information">
              1111111
            </Tab>
            <Tab eventKey="profile" title="Password">
              2222222
            </Tab>
            <Tab eventKey="contact" title="History">
              3333333333
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalProfile;
