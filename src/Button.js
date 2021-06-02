const Button = ({ setClick }) => {
  return (
    <div>
      <button onClick={setClick} className="btn">
        GET A RANDOM QUOTE
      </button>
    </div>
  );
};
export default Button;
