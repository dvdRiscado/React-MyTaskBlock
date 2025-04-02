import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CompButton from "./CompButton";
import CompText from "./CompText";

function ListTasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // URLSearchParams: Função utilizada para formatar o texto de modo que não dê conflito na URL.
    const query = new URLSearchParams();

    // Adiciona o titulo e o texto na constante da função.
    query.set("title", task.title);
    query.set("description", task.description);

    // Utiliza a constante da função "useNavigate" adicionando o nome da página e a função que retorna o texto formatado a partir da sua constante.
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg shadow-neutral-900">
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClicked(task.id)}
              className={`bg-neutral-600 text-left w-full text-white p-2 rounded-md flex gap-2 ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <CompButton onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </CompButton>
            <CompButton onClick={() => props.onTaskDeleted(task.id)}>
              <TrashIcon />
            </CompButton>
          </li>
        ))
      ) : (
        <CompText> Nenhuma tarefa foi adicionada. </CompText>
      )}
    </ul>
  );
}

export default ListTasks;
