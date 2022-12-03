import "./longButton.css";

export default function Button(props) {
  return (
    <button type="button" className="btn mb-4 btn-style">
      {props.labelText}
    </button>
  );
}
