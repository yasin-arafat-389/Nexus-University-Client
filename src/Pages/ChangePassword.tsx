/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { useChangePasswordMutation } from "../Redux/Features/Admin/userManagement.api";
import { useAppDispatch } from "../Redux/hooks";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TResponse } from "../Types";
import { logout } from "../Redux/Features/Auth/authSlice";
import LoginForm from "../Forms/LoginForm";
import FormInput from "../Forms/FormInput";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res?.data?.success);
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <LoginForm onSubmit={onSubmit}>
        <FormInput type="text" name="oldPassword" label="Old Password" />
        <FormInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </LoginForm>
    </Row>
  );
};

export default ChangePassword;
