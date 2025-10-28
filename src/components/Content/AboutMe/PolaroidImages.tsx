const PolaroidImages = () => {
    //  masonry layout with moving polaroid images?
    return (
        <div className="polaroid-images">
            <div className="polaroid-images__image polaroid-images__image--one">
                <img src="/resources/polaroid1.jpg" alt="Polaroid 1" />
            </div>
            <div className="polaroid-images__image polaroid-images__image--two">
                <img src="/resources/polaroid2.jpg" alt="Polaroid 2" />
            </div>
            <div className="polaroid-images__image polaroid-images__image--three">
                <img src="/resources/polaroid3.jpg" alt="Polaroid 3" />
            </div>
        </div>
    );
}

export default PolaroidImages;