import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import routes from "./../../routes/routes.json";
import { useSelector } from "react-redux";
import styles from "./ContactList.module.css";

import ListItem from "../ListItem/ListItem";

const ContactList = () => {
  const navigate = useNavigate();

  const datalist = useSelector((state) => {
    return state.user.fname;
  });

  const namelistItem = datalist.map((task, index) => {
    return <ListItem key={index} value={task} index={index} />;
  });

  const addHAndler = () => {
    navigate("/add_contact");
  };

  return (
    <>
      <div className={styles.background}>
        <div>
          <h2 className={styles.heading}>Contact Listing</h2>
        </div>

        <div>
          <Button className="mb-3" onClick={addHAndler} variant="warning">
            ADD USER
          </Button>
        </div>

        {namelistItem && <div className={styles.list}>{namelistItem}</div>}
      </div>
    </>
  );
};
export default ContactList;
