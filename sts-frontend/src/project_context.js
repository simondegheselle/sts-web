import * as React from 'react'
const ProjectContext = React.createContext()

function projectReducer(state, action) {
    console.log(action)

    switch (action.type) {
        case 'GET_PROJECTS': {

            return { ...state, projects: action.data}
        }
        case 'GET_FILES': {
            return { ...state, files: action.data}
        }
        case 'GET_SERVICE_TYPES': {
            return { ...state, service_types: action.data}

        }
        case 'GET_FILES_IDS': {
            return { ...state, files_ids: action.data}

        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function ProjectProvider({ children }) {
    const [state, dispatch] = React.useReducer(projectReducer, {})
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch }
    return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
}


function useProjects() {
    const context = React.useContext(ProjectContext)
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider')
    }
    return context
}

export { ProjectProvider, useProjects, projectReducer }
