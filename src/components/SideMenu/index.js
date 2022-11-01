import { Menu } from "antd";
import { useNavigate } from "react-router-dom";


const SideMenu = () => {
  const navigate = useNavigate();
  const onClick = async (menuItem) => {
    console.log("se recibe el onclick")
    navigate(menuItem.key);
  };

  const menuItems = [
    {
      key: "transactions",
      label: "Transacciones",
    },
    {
      key: "voyages",
      label: "Viajes",
    },
    {
      key: "/",
      label: "Usuarios",
    },
    {
      key: "quotation",
      label: "Cotizacion",
    },
    {
      key: "administrators",
      label: "Administradores",
    },
  ];

  return (
    <>
      <Menu items={menuItems} onClick={onClick} />
    </>
  );
};

export default SideMenu;
