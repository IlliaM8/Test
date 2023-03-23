import { FC } from "react";
import "./Header.scss";
import logo from "./assets/logo.svg";
import Button from "components/Button/Button";
interface HeaderProps {
  usersBlock: React.MutableRefObject<HTMLDivElement | null>;
  regBlock: React.MutableRefObject<HTMLDivElement | null>;
}

const Header: FC<HeaderProps> = ({ usersBlock, regBlock }) => {
  const scrolToUsers = () => usersBlock.current?.scrollIntoView();
  const scrolToReg = () => regBlock.current?.scrollIntoView();

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <img src={logo} alt="logo" />
          <div className="header__buttons">
            <div className="header__btn">
              <Button onClick={scrolToUsers} type="button">
                Users
              </Button>
            </div>
            <div className="header__btn">
              <Button onClick={scrolToReg} type="button">
                Sign up
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
