/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllFacultyCoursesQuery } from "../../Redux/Features/Faculty/facultyCourses.api";
import { Button, Col, Flex } from "antd";
import LoginForm from "../../Forms/LoginForm";
import FormSelect from "../../Forms/FormSelect";

const MyCourses = () => {
  const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery(undefined);
  const navigate = useNavigate();

  console.log(facultyCoursesData);

  const semesterOptions = facultyCoursesData?.data?.map((item: any) => ({
    label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    value: item.semesterRegistration._id,
  }));

  const courseOptions = facultyCoursesData?.data?.map((item: any) => ({
    label: item.course.title,
    value: item.course._id,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    navigate(`/faculty/courses/${data.semesterRegistration}/${data.course}`);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <LoginForm onSubmit={onSubmit}>
          <FormSelect
            options={semesterOptions}
            name="semesterRegistration"
            label="Semester"
          />
          <FormSelect options={courseOptions} name="course" label="Course" />
          <Button htmlType="submit">Submit</Button>
        </LoginForm>
      </Col>
    </Flex>
  );
};

export default MyCourses;
