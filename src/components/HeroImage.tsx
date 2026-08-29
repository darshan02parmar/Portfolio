import GridDistortion from './GridDistortion';

function HeroImage() {
    return (
        <section id="hero" className="images hidden lg:block h-[700px] w-[700px] relative z-0">
            <GridDistortion
                imageSrc='/gr3.png'
                grid={15}
                mouse={0.1}
                strength={0.15}
                relaxation={0.9}
                className="w-full h-full object-cover"
            />
        </section>
    );
}

export default HeroImage;
