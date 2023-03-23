import Tooltip from "components/Tooltip/Tooltip";
import { FC } from "react";
import { IUser } from "type";
import "./UserCard.scss";

const UserCard: FC<IUser> = ({ name, email, phone, position, photo }) => {
  return (
    <article className="userCard">
      <div className="userCard__content">
        <img className="userCard__img" src={photo} alt={name} />
        <Tooltip content={name}>
          <p className="userCard__name">{name} </p>
        </Tooltip>
        <Tooltip content={position}>
          <p className="userCard__position">{position}</p>
        </Tooltip>
        <Tooltip content={email}>
          <p className="userCard__mail">{email}</p>
        </Tooltip>
        <p className="userCard__phone">{phone}</p>
      </div>
    </article>
  );
};

export default UserCard;
