import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {

  const [projectState, setProjectState] = useState(
    {
      selectedProjectID: undefined,
      projects: []
    }
  )

  const handleStartAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }
  const hadleCancelAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined
      }
    })
  }

const handleAddProject =(projectData) => {
  setProjectState((prevState)=>{
    const projectId = Math.random();

    const newProject ={
      ...projectData,
      id: projectId
    }
    return{
      ...prevState,
      selectedProjectID: undefined,
      projects: [prevState.projects, newProject]
    }
  })
}



  let content

  if (projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={hadleCancelAddProject} />
  } else if(projectState.selectedProjectID === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects= {projectState.projects} />
      {content}
    </main>
  );
}
export default App;
