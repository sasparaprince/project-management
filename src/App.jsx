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

  let content

  if (projectState.selectedProjectID === null) {
    content = <NewProject />
  } else if(projectState.selectedProjectID === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}
export default App;
