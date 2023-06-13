import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styles from "./ListItem.module.css";
import {
  EditEmail,
  EditName,
  bothDelete,
  emailDelete,
  userDelete,
} from "../../reducers/UserSlice";

const ListItem = ({ value, index }) => {
  const [isEditEmail, setIsEditEmail] = useState(false);

  const [isEditName, setIsEditName] = useState(false);

  const [editName, setEditName] = useState("");

  const [editEmail, setEditEmail] = useState("");

  const dispatch = useDispatch();

  const nameDeleteHandler = (index) => {
    dispatch(userDelete(index));
  };

  const emailDeleteHandler = (index) => {
    dispatch(emailDelete(index));
  };

  const editEmailHandler = (index) => {
    setIsEditEmail(!isEditEmail);
  };

  const editNameHandler = (index) => {
    console.log(index);
    setIsEditName(!isEditName);
  };

  const cancleNameEditHandler = () => {
    setIsEditName(!isEditName);
    setEditName("");
  };

  const cancleEmailEditHandler = (index) => {
    setIsEditEmail(!isEditEmail);
    setEditEmail("");
  };

  const saveNameEditHandler = (index) => {
    console.log(index);
    const name1 = editName.trim();
    if (name1.length <= 2) {
      alert("Name Length Must Be Greater Than Two");
    } else {
      dispatch(EditName({ index, newName: name1 }));
      setIsEditName(!isEditName);
      setEditName("");
    }
  };

  const saveEmailEditHandler = (index) => {
    const email1 = editEmail.trim();
    const emailregx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailregx.test(email1)) {
      alert("Invalid Email Address");
    } else {
      dispatch(EditEmail({ index, newEmail: email1 }));
      setIsEditEmail(!isEditEmail);
      setEditEmail("");
    }
  };

  const deleteField = (index) => {
    dispatch(bothDelete(index));
  };

  return (
    <div className={styles.background}>
      <Row>
        <Row>
          <Col>
            <span className={styles.name}>Name</span>
            {value.Name}
          </Col>
          {value.Name && (
            <>
              {isEditName && (
                <>
                  <Col>
                    <input
                      value={editName}
                      className="ms-3"
                      type="text"
                      onChange={(e) => {
                        setEditName(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        saveNameEditHandler(index);
                      }}
                      className="ms-3 me-2   ,mb-3"
                      variant="success"
                    >
                      <i class="bi bi-check-circle" />
                    </Button>
                    <Button
                      onClick={cancleNameEditHandler}
                      className=" mb-3 mt-3"
                      variant="info"
                    >
                      <i class="bi bi-x-circle" />
                    </Button>
                  </Col>
                </>
              )}
              <Col>
                {!isEditName && (
                  <Button
                    onClick={() => {
                      editNameHandler(index);
                    }}
                    className="ms-3  mb-3 "
                  >
                    <i class="bi bi-pencil-square" />
                  </Button>
                )}

                <Button
                  variant="danger"
                  onClick={() => {
                    nameDeleteHandler(index);
                  }}
                  className="ms-3  mb-3 "
                >
                  <i class="bi bi-trash3-fill" />
                </Button>
              </Col>
            </>
          )}
        </Row>

        <Row>
          <Col>
            <span className={styles.email}> Email </span>
            {value.Email}
          </Col>

          {value.Email && (
            <>
              {isEditEmail && (
                <>
                  <Col>
                    <input
                      value={editEmail}
                      className="ms-3"
                      type="text"
                      onChange={(e) => {
                        setEditEmail(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        saveEmailEditHandler(index);
                      }}
                      className="ms-3 me-2 mb-3 mt-3"
                      variant="success"
                    >
                      <i class="bi bi-check-circle" />
                    </Button>
                    <Button
                      onClick={cancleEmailEditHandler}
                      className=" mb-3 mt-3"
                      variant="info"
                    >
                      <i class="bi bi-x-circle" />
                    </Button>
                  </Col>
                </>
              )}
              <Col>
                {!isEditEmail && (
                  <Button onClick={editEmailHandler} className="ms-3  mb-3 ">
                    <i class="bi bi-pencil-square" />
                  </Button>
                )}

                <Button
                  className="ms-3 mb-3 "
                  variant="danger"
                  onClick={() => {
                    emailDeleteHandler(index);
                  }}
                >
                  <i class="bi bi-trash3-fill" />
                </Button>
              </Col>
            </>
          )}
        </Row>
        <br />
        <Row>
          <Col>
            <Button
              className="mb-3"
              variant="info"
              onClick={() => {
                deleteField(index);
              }}
            >
              Delete Contact
            </Button>
          </Col>
        </Row>
        <hr />
      </Row>
    </div>
  );
};
export default ListItem;
