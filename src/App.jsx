import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";
import CompTitle from "./components/CompTitle";
import CompFooter from "./components/CompFooter";

function App() {
  // Fará uma busca no localStorage pelas "tasks", caso não tiver, será criado uma lista vazia.
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // useEffect: função que será ativada quando a variável do segundo parâmetro for mudada, executando a função do primeiro parâmetro.
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect: quando o segundo parâmetro for uma lista vazia, a função do primeiro parâmetro será executada uma única vez ao iniciar a página.

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

  function onTaskClicked(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onTaskDeleted(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

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
    /* 
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
    <div id="main">
      <div className="w-screen min-h-screen bg-stone-900 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <CompTitle>Gerenciador de Tarefas</CompTitle>
          <AddTask onTaskAdd={onTaskAdd} />
          <ListTasks
            tasks={tasks}
            onTaskClicked={onTaskClicked}
            onTaskDeleted={onTaskDeleted}
          />
        </div>
      </div>
      <CompFooter />
    </div>
  );
}

export default App;
