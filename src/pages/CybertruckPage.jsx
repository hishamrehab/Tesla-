import ImageBackgroundSection from "../components/ImageBackroundSection/ImageBackgroundSection";
// import cybertruckImage from "../assets/pexels-hyundaimotorgroup.jpg";
import cybertruckImage from "../assets/pexels-hyundaimotorgroup1.jpg"
export default function CyberTruckPages() {
    return (
        <div className="container">
            <section className="section">
                <ImageBackgroundSection
                    header="Cybertruck"
                    description="View inventory"
                    backgroundImage={cybertruckImage} />
            </section>
        </div>


    )
}