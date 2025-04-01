import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CompTitle from "../components/CompTitle";
import CompText from "../components/CompText";
import CompInput from "../components/CompInput";
import { useState } from "react";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title"));
  const [description, setDescription] = useState(
    searchParams.get("description")
  );

  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <CompTitle>Detalhes da Tarefa</CompTitle>
        </div>

        <div className="bg-slate-200 p-6 rounded-md">
          {!edit ? (
            <div>
              <h2 className="text-xl font-bold text-slate-600">{title}</h2>
              <CompText>{description}</CompText>
              <button
                className="bg-slate-900 text-white px-4 py-2 rounded-md font-medium"
                onClick={setEdit(true)}
              >
                Editar
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
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
                    setTitle(""); // Define o State title como ""
                    setDescription(""); // Define o State description como ""
                    setEdit(false);
                  }
                }}
              >
                Salvar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

/*
Importando o react-router-dom, usaremos o "userSearchParams", função que
utiliza a URL do site para enviar informações para outras telas. Nesse caso
usaremos para enviar as informações da tarefa escolhida.
*/
