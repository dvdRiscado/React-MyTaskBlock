function CompButton(props) {
  return (
    <button className="bg-stone-400 p-2 rounded-md text-white" {...props}>
      {props.children}
    </button>
  );
}

export default CompButton;
