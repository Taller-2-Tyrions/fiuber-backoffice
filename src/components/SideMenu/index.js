import { Menu } from "antd";
import { useNavigate } from "react-router-dom";


const SideMenu = () => {
  const navigate = useNavigate();
  const onClick = async (menuItem) => {
    navigate(menuItem.key);
  };

  const menuItems = [
    {
      key: "metrics",
      label: "Metricas",
    },
    {
      key: "users",
      label: "Usuarios",
    },
    {
      key: "quotation",
      label: "Cotizacion",
    },
    {
      key: "complaints",
      label: "Denuncias",
    },
  ];

  return (
    <>
      <Menu items={menuItems} onClick={onClick} />
    </>
  );
};

export default SideMenu;
