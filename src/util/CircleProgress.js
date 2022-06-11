import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircleProgress(props) {
    const [percentage, setPercentage] = useState(0);
    const page = props.page;
    useEffect(() => {
        if (page === 1) {
            setPercentage(11.11);
        }else if (page === 2){
            setPercentage(22.22);
        }else if (page === 3){
            setPercentage(33.33);
        }else if (page === 4){
            setPercentage(44.44);
        }else if (page === 5){
            setPercentage(55.55);
        }else if (page === 6){
            setPercentage(66.66);
        }else if (page === 7){
            setPercentage(77.77);
        }else if (page === 8){
            setPercentage(88.88);
        }else if (page === 9){
            setPercentage(100);
        }
    }, [page])
    
   
    return (
        <div>
            <CircularProgressbar value={percentage} text={`${props.page}/9`} />
        </div>
    )
}

export default CircleProgress