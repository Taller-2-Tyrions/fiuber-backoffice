import Administrators from "../../modules/Administrators";
import Quotation from "../../modules/Quotation";
import Transactions from "../../modules/Transactions";
import Users from "../../modules/Users";
import Voyages from "../../modules/Voyages";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="administrators" element={<Administrators />} />
      <Route path="quotation" element={<Quotation />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="voyages" element={<Voyages />} />
    </Routes>
  );
};

export default AppRoutes;
