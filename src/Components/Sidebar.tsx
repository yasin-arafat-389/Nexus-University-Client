import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../Utilities/sidebarItemsGenerator";
import { adminPaths } from "../Routes/Admin.routes";
import { facultyPaths } from "../Routes/Faculty.routes";
import { studentPaths } from "../Routes/Student.routes";
import { useAppSelector } from "../Redux/hooks";
import { TUser, useCurrentToken } from "../Redux/Features/Auth/authSlice";
import { verifyToken } from "../Utilities/verifyToken";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div style={{ textAlign: "center", margin: "15px 0px" }}>
        <img
          style={{ width: "170px", margin: "0px auto" }}
          src="https://i.ibb.co/5sg8fnF/nexus-uni-logo.png"
          alt=""
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
