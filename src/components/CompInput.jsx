import { useState } from "react";

function CompInput(props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      className={`${
        isFocused
          ? `bg-stone-100 placeholder:text-stone-700`
          : `bg-stone-500 placeholder:text-stone-200`
      } outline-stone-100 px-4 py-2 rounded-md`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
}

export default CompInput;
