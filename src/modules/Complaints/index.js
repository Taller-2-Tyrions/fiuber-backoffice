import { getComplaints } from "../../api/Complaints"
import { Card, Table } from "antd";
import { useNavigate } from "react-router-dom";


const Complaints = () => {
  const navigate = useNavigate();
  const tableColumns = [
    {
      title: 'ID viaje', 
      dataIndex: 'id_voyage', 
      key: 'id_voyage',
      render: (text) => <a>{text}</a>,
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            console.log(record, rowIndex);
          }
        };
      },
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
      render: (text) => <a>{text}</a>,
      onCell: (record, _) => {
        return {
          onClick: () => {
            navigate(`/users/${record.complainer_id}`)
          }
        };
      },
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
      render: (text) => <a>{text}</a>,
      onCell: (record, _) => {
        return {
          onClick: () => {
            navigate(`/users/${record.reported_id}`)
          }
        };
      },
    },
    {
      title: 'Nombre Denunciado', 
      dataIndex: 'reported_name', 
      key: 'reported_name',
    },
  ];

  const complaints = getComplaints()
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