import { useNavigate } from "react-router-dom";
import { StyledRegister } from "./style";
import { toUpperCase } from "../../utils";
import { Button, Layout } from "../../components";

export const Greeting: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <Layout isHeader={false}>
      <StyledRegister>
        <div className="registerHeader">
          <p>Congrats!</p>
          <p>Your project is almost finished.</p>
          <strong>Let’s get your project done!</strong>
        </div>
        <Button buttonType={"entryBlack"} onClick={handleButtonClick}>
          {toUpperCase("Start Getting Projects Done")}
        </Button>
      </StyledRegister>
    </Layout>
  );
};
