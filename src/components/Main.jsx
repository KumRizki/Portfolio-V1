import image from "/src/assets/image.png"

export default function Main() {
    return (
        <>
            <main>
                <LeftCol />
                <RightCol />
            </main>
        </>
    )
}

function LeftCol() { 
    return (
        <div className="rightCol">
            <h1 className="main-heading">
                Hello. <br/>
                I'm Kumala
            </h1>
            <p className="main-paragraph">UX/UI Designer with an abundance of knowledge in front end programming.</p>
            <button className="main-button">See My Projects</button>
        </div>
    )
}

function RightCol() { 
    return (
        <div className="rightCol">
            <img src={image} className="profile"/>
        </div>
    )
}