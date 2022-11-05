import { Tag } from 'antd'


export function renderRoles(roles) {
    return (
      <>
        {roles?.sort().map((role) => {
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
    );
  }