import React from "react";
import "./it.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const ITSupport: React.FC = () => {
    return (
        <div className="itsupport-container">
            <h1 className="itsupport-heading">IT Support &<br />Managed
                Services</h1>
            <p className="itsupport-subheading">
                Keep your business running smoothly with our IT Support & Managed Services. From proactive monitoring to rapid issue resolution, we ensure your technology infrastructure remains secure, efficient, and scalable. Whether you need day-to-day IT support or strategic management of your IT environment, we’ve got you covered.
            </p>
            <div className="itsupport-content">

                <div className="itsupport-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li>
                            <b>24/7 IT Support: </b>  Round-the-clock assistance to resolve issues promptly and minimize downtime.
                        </li>
                        <li>
                            <b>Proactive Monitoring: </b> Continuous monitoring to identify and address potential problems before they arise.
                        </li>
                        <li>
                            <b>System Maintenance: </b>  Regular updates and optimizations to keep your systems running at peak performance.
                        </li>
                        <li>
                            <b>Cybersecurity Management: </b> Protect your data and infrastructure from threats with robust security solutions.
                        </li>
                        <li>
                            <b>Cloud & Infrastructure Management: </b> Seamlessly manage your IT environment, from on-premise to cloud-based systems.
                        </li>
                        
                    </ul>
                </div>
                <div className="md: mt-10 flex h-90 w-full items-center justify-center lg:mr-40  lg:w-1/3">
                    <LottieAnimation
                        animationPath="/lottie/itservices.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
                </div>
            </div>
            <div className="itsupport-footer">
                <h2>Why Choose Us?</h2>
                <p>With our tailored IT support services, you gain:</p>
                <ul>
                    <li><b>Reliable Performance:</b> Ensure your technology operates efficiently without interruptions.</li>
                    <li><b>Expert Guidance:</b> Benefit from the expertise of seasoned IT professionals.</li>
                    <li><b>Cost-Effective Solutions: </b>Optimize IT expenses with scalable and predictable services.</li>
                    <li><b>Focus on Core Business: </b>Let us handle IT complexities while you concentrate on growing your business.</li>
                </ul>
                <p>
                    <i>
                    Simplify your IT operations with our dependable support and managed services—keeping your business connected, secure, and ahead of the curve.
                    </i>
                </p>
            </div>
        </div>



    );
};

export default ITSupport;