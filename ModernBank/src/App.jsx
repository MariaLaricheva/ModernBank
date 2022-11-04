import React from "react";
import styles from './style.js'
import { Navbar, Hero, CTA, CardDeal, Testimonials, Business, Billing, Stats, Footer, Clients } from './components'

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        {/* ===================================== NAVBAR ===================================== */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        {/* ===================================== HERO SECTION ===================================== */}
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
        </div>

        {/* ===================================== INFORMATION ===================================== */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
            </div>
        </div>

    </div>
);

export default App
