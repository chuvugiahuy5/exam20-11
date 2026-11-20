import objects from "../data/objects.json";
import subjects from "../data/subjects.json";

const programImages = [
    { id: "react-left-1", src: "/images/reactjs.png", alt: "ReactJS" },
    { id: "react-left-2", src: "/images/reactjs.png", alt: "ReactJS" },
    { id: "net-center", src: "/images/NET.png", alt: ".NET" },
    { id: "react-right-1", src: "/images/reactjs.png", alt: "ReactJS" },
    { id: "react-right-2", src: "/images/reactjs.png", alt: "ReactJS" },
];

function Body() {
    return (
        <main>
            <section id="objects">
                <h1>Should who learn programming in fpt APTECH</h1>

                <div className="container">
                    {objects.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="subjects">
                <h1>What is the course program?</h1>

                <div className="container">
                    {programImages.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </div>
                <p className="subject-description">{subjects[0].description}</p>
            </section>
        </main>
    );
}

export default Body;