import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { StyledRegister } from "./style";
import { toUpperCase } from "../../utils";
import { useState } from "react";

export const NameForm: React.FC = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [projectName, setProjectName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isDescription, setIsDescription] = useState<boolean>(false);

  const handleNameButtonClick = () => {
    if (projectName) {
      setIsDescription(true);
    }
  };

  const handleDescButtonClick = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("projectName", projectName || "");
    newSearchParams.set("description", description || "");

    setSearchParams(newSearchParams);
    console.log("Updated searchParams", newSearchParams.toString());

    // 새 URL로 이동
    navigate(`/register/select?${newSearchParams.toString()}`);
  };

  return (
    <Layout isHeader={false}>
      <StyledRegister>
        {!isDescription ? (
          <>
            <div className="registerHeader">
              <strong>Tell me your project's name.</strong>
            </div>
            <input
              className="nameInput"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <Button buttonType={"entryWhite"} onClick={handleNameButtonClick}>
              {toUpperCase("Start Getting Projects Done")}
            </Button>
          </>
        ) : (
          <>
            <div className="registerHeader">
              <strong>
                If you have a description for the project, <br />
                please enter it. (optional)
              </strong>
            </div>
            <input
              className="nameInput"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button buttonType={"entryWhite"} onClick={handleDescButtonClick}>
              {toUpperCase("Start Getting Projects Done")}
            </Button>
          </>
        )}
      </StyledRegister>
    </Layout>
  );
};
