import React from "react";
import Star from "../assets/star.png"

export default function Main(){
    return(
        <div>
            <div className="hero">
                <div className="hero-image">
                    <div className="hero-texts">
                        <h1>Get out and stretch your imaginations.</h1>
                        <span>Plan a different kind of getaway to uncover the hidden gems near you</span>
                        <button>Explore more</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="explore">
                    <h2>Explore the World</h2>
                    <div className="hero-cards-container">
                    <div className="hero-cards">
                        <div className="hero-card-item">
                            <img src="https://images.pexels.com/photos/17399352/pexels-photo-17399352/free-photo-of-ferias-cama-leito-quarto.jpeg" className="hero-card-item-image">
                            </img>
                            <div className="hero-card-item-texts">
                                <p>MG, Brazil</p>
                                <span>12-17 april</span>
                                <p>50€ night</p>
                                <div className="stars-container">
                                    <img src={Star} className="star" alt="" />
                                    <span>4/9 (824)</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-card-item">
                            <img src="https://images.pexels.com/photos/17417644/pexels-photo-17417644/free-photo-of-cama-leito-quarto-dormitorio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="hero-card-item-image"></img>
                            <div className="hero-card-item-texts">
                                <p>Nice, France</p>
                                <span>12-17 april</span>
                                <p>50€ night</p>
                                <div className="stars-container">
                                    <img src={Star} className="star" alt="" />
                                    <span>4/9 (824)</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-card-item">
                            <img src="https://images.pexels.com/photos/13966978/pexels-photo-13966978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="hero-card-item-image"></img>
                            <div className="hero-card-item-texts">
                                <p>Valencia, Spain</p>
                                <span>12-17 april</span>
                                <p>50€ night</p>
                                <div className="stars-container">
                                    <img src={Star} className="star" alt="" />
                                    <span>4/9 (824)</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-card-item">
                            <img src="https://images.pexels.com/photos/8092390/pexels-photo-8092390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="hero-card-item-image"></img>
                            <div className="hero-card-item-texts">
                                <p>Paris, France</p>
                                <span>12-17 april</span>
                                <p>50€ night</p>
                                <div className="stars-container">
                                    <img src={Star} className="star" alt="" />
                                    <span>4/9 (824)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}