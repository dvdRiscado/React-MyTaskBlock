import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CompTitle from "../components/CompTitle";
import CompText from "../components/CompText";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-neutral-800 py-6">
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

        <div className="p-4 space-y-2 bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg shadow-neutral-900">
          <h2 className="text-xl font-bold text-neutral-100">{title}</h2>
          <CompText>{description}</CompText>
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
