import Quotation from "../../modules/Quotation";
import Users from "../../modules/Users";
import DetailedUser from "../../modules/DetailedUser";
import Complaints from "../../modules/Complaints";
import Metrics from "../../modules/Metrics";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<DetailedUser />} />
      <Route path="/quotation" element={<Quotation />} />
      <Route path="/metrics" element={<Metrics />} />
      <Route path="/complaints" element={<Complaints />} />
    </Routes>
  );
};

export default AppRoutes;
