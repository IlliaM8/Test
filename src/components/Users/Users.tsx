import Button from "components/Button/Button";
import UserCard from "components/UserCard/UserCard";
import { FC, useEffect, useState } from "react";
import { IUserWithTimeStmp } from "type";
import { getUsers } from "components/Users/utils";
import "./Users.scss";
import Loader from "components/Loader/Loader";
interface UsersProps {
  users: IUserWithTimeStmp[];
  setUsers: React.Dispatch<React.SetStateAction<IUserWithTimeStmp[]>>;
  url: string | null;
  setUrl: React.Dispatch<React.SetStateAction<string | null>>;
  usersBlock: React.MutableRefObject<HTMLDivElement | null>;
}
const Users: FC<UsersProps> = ({
  users,
  setUsers,
  url,
  setUrl,
  usersBlock,
}) => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    getUsers(users, setUsers, url, setUrl, setLoading);
  }, []);
  return (
    <div ref={usersBlock} className="users">
      <div className="users__container">
        <h1 className="users__title">Working with GET request</h1>
        <div className="users__content">
          {users.map((user) => (
            <UserCard
              key={user.registration_timestamp + user.name}
              name={user.name}
              email={user.email}
              phone={user.phone}
              position={user.position}
              photo={user.photo}
            />
          ))}
        </div>
        {isLoading && <Loader />}
        <div className="user__btn">
          <Button
            onClick={() => getUsers(users, setUsers, url, setUrl, setLoading)}
            type="button"
            disabled={Boolean(!url)}
          >
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Users;
