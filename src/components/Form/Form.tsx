import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fecthUserPosition, fetchToken, postUser } from "service/users";
import { Data, IPosition, IUserWithTimeStmp } from "type";
import "./Form.scss";
import { formOptions, updateUsers } from "./unils";

interface FormProps {
  setUsers: React.Dispatch<React.SetStateAction<IUserWithTimeStmp[]>>;
  setUrl: React.Dispatch<React.SetStateAction<string | null>>;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: FC<FormProps> = ({ setUsers, setUrl, setRegistered }) => {
  const [positons, setPositions] = useState<IPosition[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<{ success: boolean; message: string }>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Data>({ mode: "all" });
  const getPositions = async () => {
    const res = await fecthUserPosition();
    setPositions(res.positions);
  };

  useEffect(() => {
    getPositions();
    fetchToken();
  }, []);

  const photo = watch("photo");

  // const onSubmit = handleSubmit((data) => {
  //   setLoading(true);
  //   postUser(data).then((r) => {
  //     if (r.success) setRegistered(true);
  //     if (!r.success) console.log(r.message);
  //     updateUsers(setUsers, "/users?page=1&count=6", setUrl, setLoading);
  //     setLoading(false);
  //   });
  // });
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const res = await postUser(data);
    if (res?.success) setRegistered(true);
    if (!res?.success) setError(res);
    updateUsers(setUsers, "/users?page=1&count=6", setUrl, setLoading);
    setLoading(false);
  });
  return (
    <>
      <form className="form" id="form" onSubmit={onSubmit}>
        <div
          className={!errors.name ? "input__box name" : "input__box name error"}
        >
          <label className="form__label visible" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            placeholder="Your name"
            {...register("name", formOptions.name)}
          />
          {errors && (
            <div className="form__input-error">{errors.name?.message}</div>
          )}
        </div>

        <div
          className={
            !errors.email ? "input__box email" : "input__box email error"
          }
        >
          <label className="form__label visible" htmlFor="email">
            Email
          </label>
          <input
            className="form__input "
            type="text"
            placeholder="Email"
            {...register("email", formOptions.email)}
          />
          {errors && (
            <div className="form__input-error">{errors.email?.message}</div>
          )}
        </div>
        <div
          className={
            !errors.phone ? "input__box phone" : "input__box phone error"
          }
        >
          <label className="form__label visible" htmlFor="phone">
            Phone
          </label>
          <input
            className="form__input "
            type="number"
            placeholder="Phone"
            {...register("phone", formOptions.phone)}
          />
          <div className="phone__schema">+38 (XXX) XXX - XX - XX</div>
          {errors && (
            <div className="form__input-error">{errors.phone?.message}</div>
          )}
        </div>

        <div
          className={!errors.position_id ? "form__radio" : "form__radio  error"}
        >
          <legend>Select your position</legend>
          {positons.map((positon) => (
            <div key={positon.id} className="form__radio-box">
              <input
                className="form__radio-input"
                type="radio"
                value={positon.id}
                {...register("position_id", formOptions.position_id)}
              />
              <label className="form__radio-label">{positon.name}</label>
            </div>
          ))}
        </div>

        <div className={!errors.photo ? "form__img" : "form__img  error"}>
          <div className="form__img-box">
            <input
              id="img"
              className="form__input-img"
              type="file"
              title=" awdawd"
              accept="image/jpg, image/jpeg"
              {...register("photo", formOptions.photo)}
            />
            <label className="form__input-img-label" htmlFor="img">
              Upload
            </label>
            <div className="form__input-img-div">
              <p>
                {Boolean(photo?.[0]) ? (
                  <span className="name">{photo?.[0]?.name}</span>
                ) : (
                  "Upload your photo"
                )}
              </p>
            </div>
          </div>
          {errors && (
            <div className="form__input-error">{errors.photo?.message}</div>
          )}
        </div>
        {isLoading && <Loader />}
      </form>{" "}
      <div className="form__submit">
        {!isError?.success && (
          <div className="form__submit-error">{isError?.message}</div>
        )}
        <div className="form__btn">
          <Button disabled={!isValid} type="submit" form="form">
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Form;
