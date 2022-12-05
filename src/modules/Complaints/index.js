import { getComplaints } from "../../api/Complaints"
import { Card, Table } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../useAuth";


const Complaints = () => {
  const tableColumns = [
    {
      title: 'ID viaje', 
      dataIndex: 'id_voyage', 
      key: 'id_voyage',
      render: (text) => <Link to='/'>{text}</Link>,
    },
    {
      title: 'Tipo de Denuncia',
      dataIndex: 'complaint_type',
      key: 'complaint_type',
    },
    {
      title: 'ID Denunciante', 
      dataIndex: 'complainer_id', 
      key: 'complainer_id',
      render: (text) => <Link to={`/users/${text}`}>{text}</Link>,
    },
    {
      title: 'Nombre Denunciante', 
      dataIndex: 'complainer_name', 
      key: 'complainer_name',
    },
    {
      title: 'ID Denunciado', 
      dataIndex: 'reported_id', 
      key: 'reported_id',
      render: (text) => <Link to={`/users/${text}`}>{text}</Link>,
    },
    {
      title: 'Nombre Denunciado', 
      dataIndex: 'reported_name', 
      key: 'reported_name',
    },
  ];

  const {accessToken} = useAuth();

  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
      getComplaints(setComplaints, accessToken);
  }, []);

  return (
    <Card title={'Denuncias'} style={{margin: 20}}>
      <Table 
        dataSource={complaints}
        columns={tableColumns} 
        rowKey="id_voyage"
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.comments}</p>,
        }}
      />
    </Card>
  );
};

export default Complaints;