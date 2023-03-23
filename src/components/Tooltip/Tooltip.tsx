import { ReactNode, useState, FC } from "react";
import "./Tooltip.scss";
interface TooltipProps {
  children: ReactNode;
  content: string;
}

const Tooltip: FC<TooltipProps> = ({ children, content }) => {
  const [active, setActive] = useState(false);
  const showTip = () => {
    setActive(true);
  };
  const hideTip = () => {
    setActive(false);
  };
  return (
    <div
      className="tooltip__wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <div className="tooltip__tip">{content}</div>}
    </div>
  );
};

export default Tooltip;
