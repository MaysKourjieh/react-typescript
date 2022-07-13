import Button from "./Button";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

interface Props {
  title: string;
  onAdd: (a?: any) => any;
  showAdd: boolean;
}

const Header = ({ title, onAdd, showAdd }: Props) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "Red" : "Green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
