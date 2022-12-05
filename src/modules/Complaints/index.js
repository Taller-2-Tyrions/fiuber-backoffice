import { getComplaints } from "../../api/Complaints"
import { Card, Table } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../useAuth";


const Complaints = () => {
  const tableColumns = [
    {
      title: 'ID viaje', 
      dataIndex: 'id', 
      key: 'id',
    },
    {
      title: 'Tipo de Denuncia',
      dataIndex: 'complaints',
      key: 'complaints',
      render: (compl) => compl[0].complaint_type
    },
    {
      title: 'ID Denunciante', 
      dataIndex: 'passenger_id', 
      key: 'passenger_id',
      render: (text) => <Link to={`/users/${text}`}>{text}</Link>,
    },
    {
      title: 'ID Denunciado', 
      dataIndex: 'driver_id', 
      key: 'driver_id',
      render: (text) => <Link to={`/users/${text}`}>{text}</Link>,
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
        rowKey="id"
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.complaints[0].description}</p>,
        }}
      />
    </Card>
  );
};

export default Complaints;