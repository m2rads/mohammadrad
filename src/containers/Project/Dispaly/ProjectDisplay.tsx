import { useState, useEffect} from 'react'
import ProjectOverview from '../Overview/ProjectOverview'

function ProjectDisplay(projects: any) {

    const displayProjects = () => {
        if (projects.proData.items) {
            return projects.proData.items.map((index: any, item: any) => (
                <ProjectOverview projects={index}  />
            ))
        }
    }
    return (
        <div className="projects">
            {projects.proData.isLoading? 'Loading...' : displayProjects()}
        </div>
    )
}

export default ProjectDisplay