import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div className="backdrop" onClick={props.onClick}>
      <div className="modal">
        <div className="modalTitle">{props.title}</div>
        <div className="modalMessage">
          <p>{props.text}</p>
          <button className="btn btn--alt" onClick={props.onClick}>
            ОК
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
