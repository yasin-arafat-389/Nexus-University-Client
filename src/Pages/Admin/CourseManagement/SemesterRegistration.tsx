/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { semesterStatusOptions } from "../../../constants/semester";
import { toast } from "sonner";
import { useAddRegisteredSemesterMutation } from "../../../Redux/Features/Admin/courseManagement";
import { useGetAllSemestersQuery } from "../../../Redux/Features/Admin/academicManagement.api";
import { TResponse } from "../../../Types";
import LoginForm from "../../../Forms/LoginForm";
import FormSelect from "../../../Forms/FormSelect";
import FormInput from "../../../Forms/FormInput";
import FormDatePicker from "../../../Forms/DatePicker";

const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item: any) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <LoginForm onSubmit={onSubmit}>
          <FormSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />

          <FormSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <FormDatePicker name="startDate" label="Start Date" />
          <FormDatePicker name="endDate" label="End Date" />
          <FormInput type="text" name="minCredit" label="Min Credit" />
          <FormInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">Submit</Button>
        </LoginForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
