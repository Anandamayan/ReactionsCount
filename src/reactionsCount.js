import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Like from './assets/image/like.png';
import Heart from './assets/image/heart.png';
import Sad from './assets/image/sad.jpg'

export default function ReactionsCount() {
    const [like, setLike] = useState(350);
    const [heart, setHeart] = useState(170);
    const [sad, setSad] = useState(5);

    const [active,setActive] = useState(null);

    const handleReaction = (type) => {
        if(active === "like") setLike(like -1);
        if(active === "heart") setHeart(heart -1);
        if(active === "sad") setSad(sad-1);

        if(active === type){
            setActive(null);
            return;
        }

        if(type === "like") setLike(like + 1);
        if(type === "heart") setHeart(heart + 1);
        if(type === "sad") setSad(sad + 1);

        console.log("Called");
        

        setActive(type);
    }

    const btnClass = (type) => {
             return  `btn border rounded-circle p-2 ${active === type ? "btn-primary" : "btn-light"}`
    }
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center gap-4">

                <div className="text-center">
                    <button
                        className={btnClass("like")}
                        onClick={()=> handleReaction('like')}
                    >
                        <img
                            alt="like"
                            src={Like}
                            style={{ width: "40px", height: "40px" }}
                        />
                    </button>
                    <div className="mt-2 fw-bold">{like}</div>
                </div>

                <div className="text-center">
                    <button
                        className={btnClass("heart")}
                        onClick={()=>handleReaction('heart')}
                    >
                        <img
                            alt="heart"
                            src={Heart}
                            style={{ width: "40px", height: "40px" }}
                        />
                    </button>
                    <div className="mt-2 fw-bold">{heart}</div>
                </div>

                <div className="text-center">
                    <button
                        className={btnClass("sad")}
                        onClick={()=>handleReaction('sad')}
                    >
                        <img
                            alt="sad"
                            src={Sad}
                            style={{ width: "40px", height: "40px" }}
                        />
                    </button>
                    <div className="mt-2 fw-bold">{sad}</div>
                </div>

            </div>
        </div>
    )
}
