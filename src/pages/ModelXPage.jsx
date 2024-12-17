import modeXImageNoText from "../assets/pexels-kindelmedia-9799724.jpg"
import modeXImageText from "../assets/pexels-lynxexotics-28123191.jpg"
import ImageBackgroundNoText from "../components/imageBackgroundNoTex/ImageBackgroundNoText";
import ImageBackgroundSection from "../components/ImageBackroundSection/ImageBackgroundSection";

export default function ModelXPage() {
    return (
        <section className="section">
            <ImageBackgroundSection
                header={"Model X"}
                description={"View inventory"}
                backgroundImage={modeXImageText}
            />
            {/* C:\Users\Mega stor\Desktop\tesla-project\src\assets\pexels-murry.jpg */}
            <section className="section">
                <ImageBackgroundNoText backgroundImage={modeXImageNoText} />
            </section>
        </section>
    )
}
