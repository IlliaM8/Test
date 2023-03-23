import Button from "components/Button/Button";
import { FC } from "react";
import "./Description.scss";
interface DescriptionProps {
  regBlock: React.MutableRefObject<HTMLDivElement | null>;
}

const Description: FC<DescriptionProps> = ({ regBlock }) => {
  const scrolToReg = () => regBlock.current?.scrollIntoView();

  return (
    <div className="description">
      <div className="description__container">
        <div className="description__content">
          <h1 className="description__title">
            Test assignment for front-end developer
          </h1>
          <p className="desciption__text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <div className="desciption__button">
            <Button onClick={scrolToReg} type="button">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
