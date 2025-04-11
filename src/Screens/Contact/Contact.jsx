import Footer from '../../Components/Footer.jsx';
import { Contact_Main } from './Contact_Components/Contact_Main';
import { Contact_Info } from './Contact_Components/Contact_Info';

export function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-soft-sand">

            <div className='mb-52 flex w-full h-full mx-auto max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-2xl pt-10 xl:pt-16'>
                
                <div className='w-2/3'>
                    <Contact_Main />
                </div>

                <div className='w-1/3'>
                    <Contact_Info />
                </div>

            </div>

            <Footer />
        </div>
    );
}
