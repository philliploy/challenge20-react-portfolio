import CardContainer from "../components/cardContainer"
import Card from '../components/card'
import projects from '../assets/data/project.json'

function Portfolio(){
    return <>
        <CardContainer>
         {projects.map(project=>{
          return  <Card  project={project}/>
         })}
        
        </CardContainer>
    </>
}

export default Portfolio