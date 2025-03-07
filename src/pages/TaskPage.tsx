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

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
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
