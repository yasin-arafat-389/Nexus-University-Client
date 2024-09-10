import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useAppDispatch } from "../../Redux/hooks";
import { useLoginMutation } from "../../Redux/Features/Auth/authAPI";
import { verifyToken } from "../../Utilities/verifyToken";
import { setUser, TUser } from "../../Redux/Features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LoginForm from "../../Forms/LoginForm";
import FormInput from "../../Forms/FormInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      if (res.data.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        navigate(`/${user.role}/dashboard`);
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <LoginForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <FormInput type="text" name="userId" label="ID:" />
        <FormInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </LoginForm>
    </Row>
  );
};

export default Login;
