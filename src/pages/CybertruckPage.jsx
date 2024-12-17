import ImageBackgroundSection from "../components/ImageBackroundSection/ImageBackgroundSection";
import cybertruckImage from "../assets/pexels-hyundaimotorgroup1.jpg";
import ImageGrid from "../components/imageGrid/ImageGrid";
import hamza from "../assets/pexels-hamza.jpg"
import ImageBackgroundNoText from "../components/imageBackgroundNoTex/ImageBackgroundNoText";
// C:\Users\Mega stor\Desktop\tesla-project\src\assets\
import TeslaImage from "../assets/pexels-zion-10029879.jpg"
import impactDogcrates from "../assets/pexels-impact-dog-crates-1789722873-28468162.jpg"

const featureItems = [
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' },
    { title: '2.3s 0-60', description: 'very fast' }
]

export default function CyberTruckPage() {
    return (
        <div className="container">
            <section className="section">
                <ImageBackgroundSection
                    header="Cybertruck"
                    description="View inventory"
                    backgroundImage={cybertruckImage}
                    featureItems={featureItems}
                />
            </section>
            <section className="section">
                <ImageBackgroundNoText backgroundImage={hamza} />
            </section>
            <section className="section">
                <ImageGrid
                    image1={TeslaImage}
                    image2={impactDogcrates}
                    text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
                    text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are." />
            </section>
        </div>

    )
} 