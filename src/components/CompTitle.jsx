function CompTitle(props) {
  return (
    <h1
      className="text-3xl text-slate-100 font-bold text-center border-b 
    border-neutral-600 pb-2"
    >
      {props.children}
    </h1>
  );
}

export default CompTitle;
