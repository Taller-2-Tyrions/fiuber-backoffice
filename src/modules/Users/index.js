import { Card, Table } from "antd";
import { getUsers } from "../../api/Users"
import { Link } from "react-router-dom";
import { renderRoles } from "./Roles"
import { useEffect, useState } from "react";
import useAuth from "../../useAuth";

const tableColumns = [
  {
    title: 'ID', 
    dataIndex: 'id', 
    key: 'id',
    render: (text) => <Link to={`/users/${text}`}>{text}</Link>,
  },
  {
    title: 'Nombre', 
    dataIndex: 'name', 
    key: 'name',
  },
  {
    title: 'Apellido', 
    dataIndex: 'last_name', 
    key: 'last_name',
  },
  {
    title: 'Roles', 
    dataIndex: 'roles', 
    key: 'roles',
    render: (_, { roles }) => renderRoles(roles),
  },
];


const Users = () => {
  const [users, setUsers] = useState([]);
  const { accessToken } = useAuth();
  useEffect(() => {
    getUsers(setUsers, accessToken);
  }, []);

  return (
    <Card title={'Usuarios'} style={{margin: 20}}>
      <Table 
        dataSource={users}
        columns={tableColumns} 
        rowKey="id"
      />
    </Card>
  );
};

export default Users;
