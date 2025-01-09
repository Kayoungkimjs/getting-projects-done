import { useForm } from "react-hook-form";
import { StyledGpdForm, StyledOverlay } from "./style";

export const GpdForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <>
      <StyledGpdForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Creteria</label>
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
            />
          </div>
          <div>
            <label>priority</label>
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          </div>
          <div>
            <input type="number" {...register("age", { min: 18, max: 99 })} />
          </div>
          <input type="submit" />
        </form>
      </StyledGpdForm>
      <StyledOverlay />
    </>
  );
};
