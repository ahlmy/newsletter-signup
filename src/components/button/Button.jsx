import "./button.css";

const Button = ({
  children,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onClick = () => {},
  type = "submit",
}) => {
  return (
    <button
      className="btn"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
