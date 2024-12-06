export default function Entry(props) {
    return (
        <article className="project-entry">
            <div className="project-image-container">
                <img 
                    className="project-image"
                    src={props.entry.img.src}
                    alt={props.entry.img.alt}
                />
            </div>
            <div className="project-info">
                <h1>{props.entry.heading}</h1>
                <p>{props.entry.description}</p>
            </div>
        </article>
    )
}