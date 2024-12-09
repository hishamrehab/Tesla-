import Header from "../components/header/Header";
import modeXImage from "../assets/pexels-lynxexotics.jpg"

import ImageBackgroundSection from "../components/ImageBackroundSection/ImageBackgroundSection";
export default function ModelXPage() {
    return (
        <section className="section">
            <ImageBackgroundSection header={"Model X"} description={"View inventory"} backgroundImage={modeXImage} />

        </section>
    )
}
