import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";
import CompTitle from "./components/CompTitle";

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  });

  // Fará uma busca no localStorage pelas "tasks".
  /* Obs: useEffect será executado apenas uma vez 
     por ter o segundo parâmetro como uma array vazia. */
  useEffect(() => {
    const fetchTasks = () => {
      const response = JSON.parse(localStorage.getItem("tasks"));
      setTasks(response);
    };
    fetchTasks();
  }, []);

  // Atualizará o localStorage toda vez que a variável "tasks" for mudada.
  /* Obs: useEffect será executado quando a variável do segundo parâmetro for mudada. */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /* Código utilizado para testar a aplicação 
  
  useEffect(() => {
    const fetchTasks = async () => {
      // Chamando a API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );

      // Convertendo a mensagem da API para JSON.
      const data = await response.json();

      // Armazenando os dados no State.
      setTasks(data);
    };
    fetchTasks();
  }, []);
  */

  /* Ao ser executado, receberá o "Id" da task e mudará o "isCompleted" 
     para True ou False. Depois, a array "tasks" será atualizada. */
  function onTaskClicked(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  /* Ao ser executado, receberá o "Id" da task e removerá a "task"
     correspondente da Array. Depois, a array "tasks" será atualizada. */
  function onTaskDeleted(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  /* Ao ser executado, receberá o "title" e "description", criando
     uma "task" e adicionando junto com as já existentes. Depois, a
     array "tasks" será atualizada. */
  function onTaskAdd(title, description) {
    const newTask = {
      id: tasks.length != 0 ? tasks[tasks.length - 1].id + 1 : 0,
      title: title, // ou apenas o title
      description: description, // ou apenas o description
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-auto min-h-screen bg-neutral-800 flex justify-center py-6">
      <div className="w-[500px] space-y-4">
        <CompTitle addclassname="pb-2 border-b border-neutral-500">
          My TaskBlock
        </CompTitle>
        <AddTask onTaskAdd={onTaskAdd} />
        <ListTasks
          tasks={tasks}
          onTaskClicked={onTaskClicked}
          onTaskDeleted={onTaskDeleted}
        />
      </div>
    </div>
  );
}

export default App;

/* 
  Descrição dos comandos do Tailwind CSS

  w-screen: pegue toda a largura da tela 
  h-screen: pegue toda a altura da tela 
  bg-slate-500: cor do plano de fundo cinza
  flex: adicionar o modo flex
  justify-center: centralizar horizontalmente o conteúdo
  p-6: padding de 24 pixels

  w-[500px]: largura de 500 pixels

  text-3xl: equivalente a font-size: 1.875rem (30px) e line-height: 2.25rem (36px)
  text-slate-100: cor da fonte cinza
  font-bold: equivalente a 	font-weight: 700
  text-center: centralizar o texto
*/
