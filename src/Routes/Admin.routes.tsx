import AcademicDepartment from "../Pages/Admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "../Pages/Admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../Pages/Admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "../Pages/Admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../Pages/Admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../Pages/Admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import Courses from "../Pages/Admin/CourseManagement/Courses";
import CreateCourse from "../Pages/Admin/CourseManagement/CreateCourse";
import OfferCourse from "../Pages/Admin/CourseManagement/OfferCourse";
import OfferedCourses from "../Pages/Admin/CourseManagement/OfferedCourses";
import RegisteredSemesters from "../Pages/Admin/CourseManagement/RegisteredSemesters";
import SemesterRegistration from "../Pages/Admin/CourseManagement/SemesterRegistration";
import CreateAdmin from "../Pages/Admin/UserManagement/CreateAdmin";
import CreateFaculty from "../Pages/Admin/UserManagement/CreateFaculty";
import CreateStudent from "../Pages/Admin/UserManagement/CreateStudent";
import StudentData from "../Pages/Admin/UserManagement/StudentData";
import StudentDetails from "../Pages/Admin/UserManagement/StudentDetails";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semesters",
        path: "registered-semesters",
        element: <RegisteredSemesters />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourses />,
      },
    ],
  },
];
