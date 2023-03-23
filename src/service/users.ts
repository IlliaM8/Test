import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import axios from "axiosI";
import { Data, IPositionResponse, IUserResponse } from "type";

export const fecthUsers = async (url: string | null) => {
  const res = await axios.get<IUserResponse>(`${url}`);
  return res.data;
};

export const fecthUserPosition = async () => {
  const res = await axios.get<IPositionResponse>("/positions");
  return res.data;
};

export const fetchToken = async () => {
  const res = await axios.get<{ token: string }>("/token");
  localStorage.setItem("token", `${res.data.token}`);
};

export const postUser = async (
  user: Data
): Promise<{ success: boolean; message: string } | undefined> => {
  try {
    const { data } = await axios.post<{ success: boolean; message: string }>(
      "/users",
      {
        name: user.name,
        email: user.email,
        phone: user.phone,
        position_id: user.position_id,
        photo: user.photo[0],
      },
      {
        headers: {
          Token: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error?.response?.data;
    }
  }
};
