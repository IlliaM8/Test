import { fecthUsers } from "service/users";
import { IUserWithTimeStmp } from "type";

export const getUsers = async (
  users: IUserWithTimeStmp[],
  setUsers: React.Dispatch<React.SetStateAction<IUserWithTimeStmp[]>>,
  url: string | null,
  setUrl: React.Dispatch<React.SetStateAction<string | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  const res = await fecthUsers(url);
  if (res.total_pages === res.page) {
    setUrl(null);
  } else setUrl(res.links.next_url);

  setUsers([
    ...users,
    ...res.users.sort(
      (u1, u2) => u2.registration_timestamp - u1.registration_timestamp
    ),
  ]);
  setLoading(false);
};
