
import {Left,Right} from "@bigbinary/neeto-icons";
import {Button} from "@bigbinary/neetoui";
import {useState} from 'react';
const Carousel=({title ,imageUrls})=>{
    const [currentIndex,setCurrentIndex]=useState(0);
    const handleNext=()=>{
        const nextIndex=(currentIndex+1)%imageUrls.length;
        setCurrentIndex(nextIndex);
    }
    const handlePrevious=()=>{
        const prevoiusIndex=(currentIndex-1+imageUrls.length)%imageUrls.length;
        setCurrentIndex(prevoiusIndex);
    }
    return (
        <div className="flex items-center">
        <Button icon={Left}
        className="shrink-0 focus-within:ring-0 hover:bg:transparent"
        style="text"
        onClick={handlePrevious}
        />
            <img  alt={title} src={imageUrls[currentIndex]}
            className="max-w-56 h-56 max-h-56 w-56" />
            <Button icon={Right}
            className="shrink-0 focus-within:ring-0 hover:bg:transparent"
            style="text"
            onClick={handleNext}
            />
        </div>
    )
}
export default Carousel;