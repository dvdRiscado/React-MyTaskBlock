import { useState, useRef, useEffect } from "react";
import CompInput from "./CompInput";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [description]);

  return (
    <div className="space-y-4 p-6 bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg shadow-neutral-900 flex flex-col">
      <CompInput
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        ref={textareaRef}
        className="bg-neutral-600 focus:bg-neutral-200 text-neutral-200 
      focus:text-neutral-800 border border-neutral-600 focus:border-neutral-200 
      placeholder:text-neutral-400 placeholder:focus:text-neutral-600 px-4 py-2 
      rounded-md resize-none overflow-hidden"
        value={description}
        placeholder="Digite a descrição da tarefa.."
        rows="1"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-neutral-700 text-white px-4 py-2 rounded-md font-medium 
        hover:bg-green-900 active:bg-green-800"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          } else {
            props.onTaskAdd(title, description);
            setTitle("");
            setDescription("");
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
