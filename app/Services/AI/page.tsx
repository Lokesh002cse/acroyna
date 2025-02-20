import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import Aiml from "@/components/Services/AI/layout";
import React from "react";




const AI: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <Aiml/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default AI;