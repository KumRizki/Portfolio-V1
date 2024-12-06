import data from "../data"
import Entry from "./Entry"

const entryElements = data.map((entry) => {
    return (
        <Entry 
            key={entry.id}
            entry={entry}
        />
    )
})

export default function Projects() {
    return (
        <div className="projects-section">
            <h1>My Projects</h1>
            <div className="projects-container">
                {entryElements}
            </div>
        </div>
    )
}