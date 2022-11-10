import Quotation from "../../modules/Quotation";
import Transactions from "../../modules/Transactions";
import Users from "../../modules/Users";
import DetailedUser from "../../modules/DetailedUser";
import Voyages from "../../modules/Voyages";
import Complaints from "../../modules/Complaints";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="users/:id" element={<DetailedUser />} />
      <Route path="quotation" element={<Quotation />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="voyages" element={<Voyages />} />
      <Route path="complaints" element={<Complaints />} />
    </Routes>
  );
};

export default AppRoutes;
