import { fecthUsers } from "service/users";
import { IUserWithTimeStmp } from "type";

export const formOptions = {
  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "The name must be at least 2 characters.",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value:
        // eslint-disable-next-line no-control-regex
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      message: "The email must be a valid email address.",
    },
  },
  phone: {
    required: "Phone is required",
    pattern: {
      value: /^[\+]{0,1}380([0-9]{9})$/,
      message: "The phone must be a valid phonenumber.",
    },
    setValueAs: (v: string) => {
      if (!v.includes("+")) return "+".concat(v);
    },
  },
  position_id: {
    validate: (value: number) => value !== null,
  },
  photo: {
    required: "Photo is required",
    validate: {
      value: (value: { 0: File }) =>
        value[0].size / 1024 ** 2 <= 5 ||
        "The photo may not be greater than 5 Mbytes.",
      format: (value: { 0: File }) =>
        value[0].type === "image/jpeg" ||
        value[0].type === "image/jpg" ||
        "Image is invalid.",
    },
  },
};

export const updateUsers = async (
  setUsers: React.Dispatch<React.SetStateAction<IUserWithTimeStmp[]>>,
  url: string | null,
  setUrl: React.Dispatch<React.SetStateAction<string | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const res = await fecthUsers(url);
  if (res.total_pages === res.page) {
    setUrl(null);
  } else setUrl(res.links.next_url);

  setUsers(
    res.users.sort(
      (u1, u2) => u2.registration_timestamp - u1.registration_timestamp
    )
  );
};
