import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CompTitle from "../components/CompTitle";
import { useState, useRef, useEffect } from "react";

function TaskPage() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id") || "";
  const [title, setTitle] = useState(searchParams.get("title") || "");
  const [description, setDescription] = useState(
    searchParams.get("description") || ""
  );

  const textareaRef = useRef(null);

  const navigate = useNavigate();

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskAltered(taskId, title, description) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, title: title, description: description };
      }
      console.log("conferindo..");
      return task;
    });

    console.log("alteração feita!");
    setTasks(newTasks);
  }

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [description]);

  return (
    <div className="h-auto min-h-screen w-screen bg-neutral-800 py-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6 border-b border-neutral-500">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100 pb-[6px]"
          >
            <ChevronLeftIcon size={30} color="oklch(0.922 0 0)" />
          </button>
          <CompTitle>Detalhes da Tarefa</CompTitle>
        </div>

        <div
          className="p-4 space-y-2 bg-neutral-800 border 
        border-neutral-600 rounded-lg shadow-lg shadow-neutral-900"
        >
          <input
            type="text"
            className="text-xl text-neutral-100 font-bold w-full bg-neutral-800 rounded-md"
            value={title}
            placeholder="Digite o título da tarefa"
            onChange={(event) => setTitle(event.target.value)}
          />

          <textarea
            ref={textareaRef}
            className="text-neutral-200 font-bold w-full bg-neutral-800 rounded-md resize-none overflow-hidden"
            value={description}
            placeholder="Digite a descrição da tarefa.."
            rows="1"
            onChange={(event) => setDescription(event.target.value)}
          />

          <button
            className="bg-neutral-700 text-white px-4 py-2 rounded-md font-medium 
        hover:bg-green-900 active:bg-green-800 w-full"
            onClick={() => {
              if (!title.trim() || !description.trim()) {
                return alert("Preencha o título e a descrição da tarefa.");
              } else {
                onTaskAltered(id, title, description);
                return alert("Alteração feita com sucesso!");
              }
            }}
          >
            Salvar
          </button>
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
