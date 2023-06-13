import { Route, Routes } from "react-router-dom";
import routes from "./routes.json";
import AddUser from "../components/AddUser/AddUser";
import ContactList from "../components/ContactList/ContactList";
const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<AddUser />} />
        <Route path={routes.HOME} element={<AddUser />} />
        <Route path={routes.ADD_CONTACT} element={<AddUser />} />
        <Route path={routes.CONTACT_LIST} element={<ContactList />} />
      </Routes>
    </>
  );
};
export default PageRoutes;
