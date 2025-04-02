function CompInput(props) {
  return (
    <input
      className="bg-neutral-600 focus:bg-neutral-200 text-neutral-200 
      focus:text-neutral-800 border border-neutral-600 focus:border-neutral-200 
      placeholder:text-neutral-400 placeholder:focus:text-neutral-600 px-4 py-2 rounded-md"
      {...props}
    />
  );
}

export default CompInput;
