import { Card, Table, Tag } from "antd";
import { getUsers } from "../../api/Users"
import { useNavigate } from "react-router-dom";


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
    render: (_, { roles }) => (
      <>
        {roles.sort().map((role) => {
          let label = role.toUpperCase()
          let color = 'geekblue'
          switch (label) {
            case "ADMIN":
              label = "ADMINISTRADOR/A"
              color = 'yellow'
              break;
            case "PASSENGER":
              label = "PASAJERO/A"
              color = 'green'
              break;
            case "DRIVER":
              label = "CONDUCTOR/A"
              break;
            default:
              throw new Error("No se encuentra el label")
          }
          return (
            <Tag color={color} key={role}>
              {label}
            </Tag>
          );
        })}
      </>
    ),
  },
];


const Users = () => {
  const navigate = useNavigate();
  const users = getUsers();

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