import { useState } from "react";
import CompInput from "./CompInput";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg shadow-neutral-900 flex flex-col">
      <CompInput
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <CompInput
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
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
