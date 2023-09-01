import React from 'react'
import Navbar from '../components/Navbar'

export default function About(){
    return (
        <>
            <Navbar/>
            <main className="about--main">
                <section className="image"></section>    {/* image added as background to use bg-cover property ... easier */}
                <section className="about--text">

                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                    <br />
                    <br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </section>
                <section className="about--cta">
                    <h1>Your destination is waiting. <br />
                    Your van is ready.</h1>
                    <button>
                        Explore our vans
                    </button>
                </section>
            </main>
        </>
    )
}