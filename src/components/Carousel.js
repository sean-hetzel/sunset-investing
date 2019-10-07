import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
// import tempHouse1 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Alara-Ariel-Elite_Front-Elevation_1920.jpg";
// import tempHouse2 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Estrella-Altamira_Front-Elevation_920.jpg";
// import tempHouse3 from "/Users/flatironschool/Development/sunset-investing/src/images/01-Palisades-Santee_Front-Elevation-Twilight_920.jpg";
// import tempHouse4 from "/Users/flatironschool/Development/sunset-investing/src/images/1-Solano-Artemis_Front-Elevation_1920.jpg";
// import tempHouse5 from "/Users/flatironschool/Development/sunset-investing/src/images/07-Canyon-Oaks-Sage_Front-Elevation_CC_920.jpg";
// import tempHouse6 from "/Users/flatironschool/Development/sunset-investing/src/images/14-025-03-Rear-Exterior-over-Fire-Pit.jpg";

// const images = [
//     tempHouse1,
//     tempHouse2,
//     tempHouse3,
//     tempHouse4,
//     tempHouse5,
//     tempHouse6
// ];

function Carousel(props) {
    const images = props.propertyImages[props.id]
    const [index, setIndex] = React.useState(0);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (index === 4) {
    //             setIndex(0);
    //         } else {
    //             setIndex(prev => prev + 1);
    //         }
    //     }, 3000);
    //     return () => clearInterval(timer);
    // }, [index]);

    return (
        <Gallery
            style={{
                height: "100%",
                width: "100%"
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }} 
        >
            {images.map(image => (
                <GalleryImage objectFit="contain" key={image} src={image} />
            ))}
        </Gallery>
    );
}

export default Carousel;
