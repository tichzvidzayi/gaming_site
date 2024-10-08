interface ButtonProps {
  className?: string;
  btnStyle?: "fill" | "outline";
  btnText?: string;
}

export default function Button({
  className = "",
  btnStyle = "fill",
  btnText = "This Button"
}: ButtonProps) {
  //  filled and gradient styles for the button
  if (btnStyle === "fill") {
    return (
      <button className={`btn btn-fill ${className}`}>
        <span className="btn-text">{btnText}</span>
      </button>
    );
  }

  // transparent and borderline
  if (btnStyle === "outline") {
    return (
      <button className={`btn btn-outline ${className}`}>
        <span className="btn-text gradient-text">{btnText}</span>
      </button>
    );
  }

  return null;
}
