function CompTitle(props) {
  console.log(props);

  return (
    <h1
      className={
        `text-3xl text-slate-100 font-bold text-center
     pb-2 ` + props.addclassname
      }
    >
      {props.children}
    </h1>
  );
}

export default CompTitle;
