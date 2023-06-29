function Modal(props) {
  return (
    <div className="modal">
      <p>{props.text}</p>
      <button className="btn btn--alt" onClick={props.onClose}>
        Отмена
      </button>
      <button className="btn" onClick={props.onClose}>
        Ок
      </button>
    </div>
  );
}

export default Modal;
