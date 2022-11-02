import { Card, Table } from "antd";
import { getUsers } from "../../api/Users"

const Users = () => {
  const tableColumns = [
    {
      title: 'ID', 
      dataIndex: 'ID', 
      key: 'ID',
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
    },
    {
      title: 'Mas Informacion'
    }
  ];
  const users = getUsers();

  return (
    <Card title={'Usuarios'} style={{margin: 20}}>
      <Table dataSource={users} columns={tableColumns} />
    </Card>
  );
};

export default Users;