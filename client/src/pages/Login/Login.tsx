import { useState } from "react";
import { useLoginMutation } from "../../graphql/generated/graphql";
import { StyledLogin } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Layout } from "../../components";
import { Input } from "../../components/Forms/Input";
import { ErrorInfo } from "../../components/Notices";
import { validatePassword, validateUserId } from "../../utils/validation";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginMutation] = useLoginMutation();

  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorInfo, setErrorInfo] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!validateUserId(userId) || !validatePassword(password)) {
      setErrorInfo(true);
      return;
    }

    try {
      const response = await loginMutation({
        variables: {
          input: { userId, password },
        },
      });

      if (response.data) {
        const { accessToken, userId } = response.data.login;
        console.log("Login successful!", accessToken, userId);

        localStorage.setItem("token", accessToken);
        navigate("/select");
      }
    } catch (e) {
      console.error("Login failed", e);
    }
  };

  return (
    <Layout isHeader={false}>
      <StyledLogin>
        <div className="loginHeader">
          <h1>Getting Projects Done</h1>
        </div>
        <div className="idGroup">
          <h3>ID</h3>
          <Input
            inputType="line"
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter a User ID"
          />
          {errorInfo && !validateUserId(userId) ? (
            <ErrorInfo
              message={
                "Please enter an ID without special characters or spaces."
              }
            />
          ) : null}
        </div>
        <div className="passwordGroup">
          <h3>PASSWORD</h3>
          <Input
            inputType="line"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a Password"
          />
          {errorInfo && !validatePassword(password) ? (
            <ErrorInfo
              message={
                "Please enter a password with at least 8 characters and special character."
              }
            />
          ) : null}
        </div>
        <Button
          className={`loginBtn ${userId && password ? "active" : ""} `}
          type="submit"
          buttonType="entryWhite"
          disabled={!userId || !password}
          onClick={handleLogin}
        >
          LOGIN
        </Button>
      </StyledLogin>
    </Layout>
  );
};