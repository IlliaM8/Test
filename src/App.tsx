import { useRef, useState } from "react";
import Description from "components/Description/Description";
import Header from "components/Header/Header";
import Register from "components/Register/Register";
import Users from "components/Users/Users";
import { IUserWithTimeStmp } from "type";

function App() {
  const [users, setUsers] = useState<IUserWithTimeStmp[]>([]);
  const [url, setUrl] = useState<string | null>("/users?page=1&count=6");
  const usersBlock = useRef<HTMLDivElement | null>(null);
  const regBlock = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Header usersBlock={usersBlock} regBlock={regBlock} />
      <Description regBlock={regBlock} />
      <Users
        users={users}
        setUsers={setUsers}
        url={url}
        setUrl={setUrl}
        usersBlock={usersBlock}
      />
      <Register setUsers={setUsers} setUrl={setUrl} regBlock={regBlock} />
    </>
  );
}

export default App;
