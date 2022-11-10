import { Card, Table, Tag } from "antd";
import { getUsers } from "../../api/Users"
import { useNavigate } from "react-router-dom";
import { renderRoles } from "./Roles"
import { useEffect, useState } from "react";

const tableColumns = [
  {
    title: 'ID', 
    dataIndex: 'id', 
    key: 'id',
    render: (text) => <a>{text}</a>,
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
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <Card title={'Usuarios'} style={{margin: 20}}>
      <Table 
        dataSource={users}
        columns={tableColumns} 
        rowKey="id"
        onRow={(user) => ({
          onClick: () => navigate(`users/${user.id}`),
        })}
      />
    </Card>
  );
};

export default Users;