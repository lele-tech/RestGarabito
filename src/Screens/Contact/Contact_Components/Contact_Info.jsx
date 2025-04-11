import { Button } from '../../../Components/ui/Buttons'
import { Link } from 'react-router-dom'

export function Contact_Info() {
    return (
        <div className='flex h-full mt-24'>
            <div className='w-[20%] h-full bg-dawn-pink absolute right-0 top-0'>

            </div>

            <div className='w-full absolute drop-shadow-xl bg-cocoa-bark py-20 px-20 z-10 '>
                <div className='w-20 h-20 drop-shadow-xl bg-dawn-pink absolute -left-10 -top-10 z-10'>
                </div>
                <h1 className='text-2xl md:text-5xl font-righteous text-dawn-pink md:-mb-2'>Información</h1>
                <ul className='text-soft-sand font-poppins text-xl mt-20 space-y-16 '>
                    <li className='flex items-center gap-2'>
                        <img src="/imgs/icons/mail.svg" alt="email icon" className='w-10 h-10' />
                        <span className='ml-5'>palenquegarabito@gmail.com</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <img src="/imgs/icons/phone.svg" alt="email icon" className='w-10 h-10' />
                        <span className='ml-5'>2639 3825 / 2639 3826</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <img src="/imgs/icons/whatsapp.svg" alt="email icon" className='w-10 h-10' />
                        <span className='ml-5'>6485 0312</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <img src="/imgs/icons/location.svg" alt="email icon" className='w-10 h-10' />
                        <span className='ml-5'>Miramar, Puntarenas</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <img src="/imgs/icons/clock.svg" alt="email icon" className='w-10 h-10' />
                        <span className='ml-5'>9:00 - 18:00*</span>
                    </li>
                </ul>

            </div>

        </div>
    );
}
