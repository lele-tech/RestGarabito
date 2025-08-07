import Footer from '../../Components/Footer.jsx';
import {Packages_Title } from '../Packages/Packages_Title.jsx';
import {Packages_Info } from '../Packages/Packages_Info.jsx';
export function Packages() {
    return (
      <div className="flex flex-col bg-[#362419] ">
     

     <Packages_Title  /> 
     <Packages_Info /> 
    <Footer theme="claro" /> 
      
    </div>
  );
}