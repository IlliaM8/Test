import Form from "components/Form/Form";
import { FC, useState } from "react";
import { IUserWithTimeStmp } from "type";
import "./Register.scss";
import img from "./success-image.svg";
interface RegisterProps {
  setUsers: React.Dispatch<React.SetStateAction<IUserWithTimeStmp[]>>;
  setUrl: React.Dispatch<React.SetStateAction<string | null>>;
  regBlock: React.MutableRefObject<HTMLDivElement | null>;
}

const Register: FC<RegisterProps> = ({ setUsers, setUrl, regBlock }) => {
  const [registered, setRegistered] = useState(false);
  return (
    <div ref={regBlock} className="register">
      <div className="register__container">
        {!registered ? (
          <>
            <h1 className=" register__title">Working with POST request</h1>
            <Form
              setUsers={setUsers}
              setUrl={setUrl}
              setRegistered={setRegistered}
            />
          </>
        ) : (
          <>
            <h1 className=" register__title">User successfully registered</h1>
            <img src={img} alt="img" />
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
