import HomeSectionVideo from "../components/HomeSectionVideo/HomeSectionVideo";
import ImageBackgroundSection from "../components/ImageBackroundSection/ImageBackgroundSection";
import modelSImage from "../assets/pexels-bylukemiller.jpg";
// import modelSImage from "../assets/pexels-bylukemiller.jpg";
import modelXImage from "../assets/pexels-vladimirsrajber.jpg";
import Cybertruck from "../assets/pexels-hyundaimotorgroup.jpg";

export default function HomePage() {
    return (
        <>
            <section className="section">
                <HomeSectionVideo />
            </section>
            <section className="section">
                <ImageBackgroundSection
                    header="Model S"
                    description="View inventory"
                    backgroundImage={modelSImage}
                />
            </section>

            <section className="section">
                <ImageBackgroundSection
                    header="Model X"
                    description="View inventory"
                    backgroundImage={modelXImage}
                />
            </section>


            <section className="section">
                <ImageBackgroundSection
                    header="Cybertruck"
                    description="View inventory"
                    backgroundImage={Cybertruck}
                />
            </section>
        </>
    )
}
