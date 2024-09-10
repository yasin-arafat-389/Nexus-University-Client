import MySchedule from "../Pages/Student/MySchedule";
import OfferedCourse from "../Pages/Student/OfferedCourse";
import StudentDashboard from "../Pages/Student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
  {
    name: "My Schedule",
    path: "schedule",
    element: <MySchedule />,
  },
];
