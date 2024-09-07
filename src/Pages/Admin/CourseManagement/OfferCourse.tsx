/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useCreateOfferedCourseMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemestersQuery,
  useGetCourseFacultiesQuery,
} from "../../../Redux/Features/Admin/courseManagement";
import {
  useGetAcademicDepartmentsQuery,
  useGetAcademicFacultiesQuery,
} from "../../../Redux/Features/Admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import moment from "moment";
import { Button, Col, Flex } from "antd";
import LoginForm from "../../../Forms/LoginForm";
import FormSelect from "../../../Forms/FormSelect";
import FormSelectWithWatch from "../../../Forms/FormSelectWithWatch";
import FormInput from "../../../Forms/FormInput";
import { weekDaysOptions } from "../../../constants/global";
import FormTimePicker from "../../../Forms/TimePicker";

const OfferCourse = () => {
  const [courseId, setCourseId] = useState("");

  const [addOfferedCourse] = useCreateOfferedCourseMutation();

  const { data: semesterRegistrationData } = useGetAllRegisteredSemestersQuery([
    { name: "sort", value: "year" },
    { name: "status", value: "UPCOMING" },
  ]);

  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);

  const { data: academicDepartmentData } =
    useGetAcademicDepartmentsQuery(undefined);

  const { data: coursesData } = useGetAllCoursesQuery(undefined);

  const { data: facultiesData, isFetching: fetchingFaculties } =
    useGetCourseFacultiesQuery(courseId, { skip: !courseId });

  const semesterRegistrationOptions = semesterRegistrationData?.data?.map(
    (item: any) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );

  const academicFacultyOptions = academicFacultyData?.data?.map(
    (item: any) => ({
      value: item._id,
      label: item.name,
    })
  );

  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item: any) => ({
      value: item._id,
      label: item.name,
    })
  );

  const courseOptions = coursesData?.data?.map((item: any) => ({
    value: item._id,
    label: item.title,
  }));

  const facultiesOptions = facultiesData?.data?.faculties?.map((item: any) => ({
    value: item._id,
    label: item.fullName,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const offeredCourseData = {
      ...data,
      maxCapacity: Number(data.maxCapacity),
      section: Number(data.section),
      startTime: moment(new Date(data.startTime)).format("HH:mm"),
      endTime: moment(new Date(data.endTime)).format("HH:mm"),
    };

    const res = await addOfferedCourse(offeredCourseData);
    console.log(res);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <LoginForm onSubmit={onSubmit}>
          <FormSelect
            name="semesterRegistration"
            label="Semester Registrations"
            options={semesterRegistrationOptions}
          />
          <FormSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          />
          <FormSelect
            name="academicDepartment"
            label="Academic Department"
            options={academicDepartmentOptions}
          />
          <FormSelectWithWatch
            onValueChange={setCourseId}
            options={courseOptions}
            name="course"
            label="Course"
          />
          <FormSelect
            disabled={!courseId || fetchingFaculties}
            name="faculty"
            label="Faculty"
            options={facultiesOptions}
          />
          <FormInput type="text" name="section" label="Section" />
          <FormInput type="text" name="maxCapacity" label="Max Capacity" />
          <FormSelect
            mode="multiple"
            options={weekDaysOptions}
            name="days"
            label="Days"
          />
          <FormTimePicker name="startTime" label="Start Time" />
          <FormTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">Submit</Button>
        </LoginForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
