import "./inputText.css";

export default function InputText(props) {
  let selectClass = props.selectClass ? ` ${props.selectClass}` : "";

  return (
    <div className="container d-flex">
      {/* <label className="labelInput" htmlFor={props.id}>
        {props.labeltex}
      </label> */}
      <input className={`inputText${selectClass}`} {...props}></input>
    </div>
  );
}
