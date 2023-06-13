import { useState } from "react";
import styles from "./AddUser.module.css";
import { useNavigate } from "react-router-dom";
import routes from "./../../routes/routes.json";
import { useDispatch } from "react-redux";
import { Fname } from "../../reducers/UserSlice";
import { Button, Col, Row } from "react-bootstrap";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addHandler = () => {
    const name1 = name.trim();
    const email1 = email.trim();
    const emailregx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const phone1 = phone.trim();
    if (name.length <= 2) {
      alert("Name Length Must Be Greater Than Two");
    } else if (!emailregx.test(email1)) {
      alert("Invalid Email Address");
    } else if (phone1.length != 10) {
      alert("Enter 10 Digit Phone Number");
    } else {
      dispatch(Fname({ Name: name, Email: email }));

      setName("");
      setEmail("");
      setPhone("");
      setNote("");
      navigate("/contact_list");
    }
    console.log(name1);
  };

  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.heading}>Add New Contact</h1>
        <div className={styles.main}>
          <div>
            <Row className="mt-3 md-3">
              <Col>
                <label htmlFor="name">Contact Name </label>
              </Col>
              <Col>
                <input
                  required
                  value={name}
                  placeholder="Enter Contact Name"
                  type="text"
                  id="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </div>

          <br />

          <div>
            <Row className="mt-3 md-3">
              <Col>
                <label htmlFor="email">Email </label>
              </Col>
              <Col>
                <input
                  value={email}
                  placeholder="email@test.com"
                  type="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </div>
          <br />

          <div>
            <Row className="mt-3 md-3">
              <Col>
                <label htmlFor="phone">Phone </label>
              </Col>
              <Col>
                <input
                  value={phone}
                  placeholder="8156479611"
                  type="number"
                  id="phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </div>
          <br />

          <div>
            <Row className="mt-3 md-3">
              <Col>
                <label htmlFor="note">Note </label>
              </Col>
              <Col>
                <input
                  value={note}
                  placeholder="Note"
                  type="text"
                  id="note"
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </div>
          <div>
            <Button className="mt-3" onClick={addHandler}>
              Save Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddUser;
