import FacultyDashboard from "../Pages/Faculty/FacultyDashboard";
import MyCourses from "../Pages/Faculty/MyCourses";
import MyStudents from "../Pages/Faculty/MyStudents";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "My Courses",
    path: "courses",
    element: <MyCourses />,
  },
  {
    path: "courses/:registerSemesterId/:courseId",
    element: <MyStudents />,
  },
];
