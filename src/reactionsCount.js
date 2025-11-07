import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Like from './assets/image/like.png';
import Heart from './assets/image/heart.png';
import Sad from './assets/image/sad.jpg'

export default function ReactionsCount() {
    const [like, setLike] = useState(350);
    const [heart, setHeart] = useState(170);
    const [sad, setSad] = useState(5);

    const [liked, setLiked] = useState(false);
    const [hearted, setHearted] = useState(false)
    const [saded, setSaded] = useState(false);

    const clickLiked = () => {
        if (!liked) {
            setLike(like + 1);
        } else {
            setLike(like - 1);
        }
        setLiked(!liked);
    }
    const clickHeart = () => {
        if (!hearted) {
            setHeart(heart + 1);
        } else {
            setHeart(heart - 1);
        }
        setHearted(!hearted);
    }
    const clickSad = () => {
        if (!saded) {
            setSad(sad + 1);
        } else {
            setSad(sad - 1);
        }
        setSaded(!saded)
    }
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center gap-4">

                <div className="text-center">
                    <button
                        className={`btn border rounded-circle p-2 ${liked ? "btn-primary" : "btn-light"}`}
                        onClick={clickLiked}
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
                        className={`btn border rounded-circle p-2 ${hearted ? "btn-primary" : "btn-light"}`}
                        onClick={clickHeart}
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
                        className={`btn border rounded-circle p-2 ${saded ? "btn-primary" : "btn-light"}`}
                        onClick={clickSad}
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
