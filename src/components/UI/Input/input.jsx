import "../Input/input.css";

export default function Input(props) {
  let selectClass = props.selectClass ? ` ${props.selectClass}` : "";

  return (
    <div className="d-flex mt-2">
      <input className={`inputText${selectClass}`} {...props}></input>
    </div>
  );
}
