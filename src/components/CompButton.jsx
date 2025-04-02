function CompButton(props) {
  return (
    <button
      className={
        `bg-neutral-700 p-2 rounded-md text-white ` + props.addclassname
      }
      {...props}
    >
      {props.children}
    </button>
  );
}

export default CompButton;
