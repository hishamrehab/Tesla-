import ImageBackgroundSection from "../components/ImageBackroundSection/ImageBackgroundSection";
import modelSImage from "../assets/model-s.jpg";
import ImageBackgroundNoText from "../components/imageBackgroundNoTex/ImageBackgroundNoText";
import modelSNoText from "../assets/pexels-kindelmedia-9799998.jpg"
import ImageGrid from "../components/imageGrid/ImageGrid";

import teslaCar from "../assets/pexels-lynxexotics.jpg"
export default function ModelSPage() {
    return (
        <div className="container">
            <section className="section">
                <ImageBackgroundSection
                    header="Model S"
                    description="View inventory"
                    backgroundImage={modelSImage}
                />
                <section className="section">
                    <ImageBackgroundNoText backgroundImage={modelSNoText} />
                </section>
                <section className="section">
                    <ImageGrid
                        image1={modelSImage}
                        image2={teslaCar}
                        text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
                        text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
                    />
                </section>
            </section>
        </div>
    )
}