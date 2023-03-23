export interface IUser {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;
}
interface ITimeStmp {
  registration_timestamp: number;
}
export interface IUserWithTimeStmp extends IUser, ITimeStmp {}

export interface IUserResponse {
  users: IUserWithTimeStmp[];
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  total_pages: number;
  page: number;
  success: boolean;
}
export interface IPosition {
  id: number;
  name: string;
}
export interface IPositionResponse {
  positions: IPosition[];
  success: boolean;
}
export interface Data {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: { 0: File };
}
