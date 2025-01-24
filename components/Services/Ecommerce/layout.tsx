import React from "react";
import "./commerce.css";
import LottieAnimation from "@/components/Lottie/LottieAnimation";

const Ecommerce: React.FC = () => {
    return (
        <div className="ecommerce-container">
            <h1 className="ecommerce-heading">E-Commerce<br />Solutions</h1>
            <p className="ecommerce-subheading">
                Transform your business with our E-commerce Solutions,
                designed to create seamless shopping experiences and
                drive online success. From intuitive storefront designs to
                robust backend systems, we offer end-to-end solutions
                tailored to your unique business needs. Whether you're
                starting fresh or scaling an existing platform, we ensure
                your online store stands out and performs at its best.    </p>
            <div className="ecommerce-content">
            <div className="md: mt-20 flex h-90 w-full items-center justify-center lg:mr-40  lg:w-1/3">
                    <LottieAnimation
                        animationPath="/lottie/ecommerce.json" // Animation for another use
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className="ecommerce-details">
                    <h2>What We Offer:</h2>
                    <ul>
                        <li>
                            <b>Ecommerce Platform Development: </b> Build feature-rich platforms tailored to your business needs.
                        </li>
                        <li>
                            <b>CI/CD Pipelines: </b> Automate build, test, and deployment processes for faster updates.
                        </li>
                        <li>
                            <b>Payment Gateway Integration: </b> Secure and seamless payment processing for your customers.
                        </li>
                        <li>
                            <b>Infrastructure as Code (IaC): </b> Simplify infrastructure management with automated provisioning.
                        </li>
                        <li>
                            <b>Monitoring & Analytics: </b>Gain real-time insights to enhance customer experience and optimize operations.
                        </li>
                        <li>
                            <b>Cloud Integration: </b> Deploy and manage ecommerce platforms seamlessly across cloud environments.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="ecommerce-footer">
                <h2>Why Choose Our Ecommerce Solutions?</h2>
                <p>With our tailored ecommerce services, you gain:</p>
                <ul>

                    <li>Scalability: Platforms that grow alongside your business.</li>
                    <li>User-Centric Design: Enhance customer satisfaction and retention.</li>
                    <li>Scalability: Build platforms that grow with your business needs.</li>
                    <li>Reliability: Robust systems built to handle high traffic and transactions.</li>
                </ul>
                <p>
                    <i>
                        Your online success starts here—let’s build the future of your e-commerce business together.
                    </i>
                </p>
            </div>
        </div>



    );
};

export default Ecommerce;