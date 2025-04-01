import { useState } from "react";
import CompInput from "./CompInput";

function AddTask(props) {
  // props: objeto que contém os valores dos parâmetros enviados
  // Criando States: title e description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    // Criando a div do AddTask
    <div className="space-y-4 p-6 bg-stone-800 border shadow-lg border-stone-400 rounded-md flex flex-col">
      <CompInput // Puxa o componente CompInput
        type="text"
        placeholder="Digite o título da tarefa"
        value={title} // O valor do input será o valor do State title
        onChange={(event) => setTitle(event.target.value)} // Função que atuaizará o State title a cada mudança no valor do input
      />
      <CompInput //Puxa o componente CompInput
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description} // O valor do input será o valor do State description
        onChange={(event) => setDescription(event.target.value)} // Função que atuaizará o State description a cada mudança no valor do input
      />
      <button
        className="bg-slate-900 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            // Se o valor do State title ou description for nulo (sem contar os espaços):
            return alert("Preencha o título e a descrição da tarefa.");
          } else {
            props.onTaskAdd(title, description); // Executa a função onTaskAdd do props com dois parâmetros
            setTitle(""); // Define o State title como ""
            setDescription(""); // Define o State description como ""
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
