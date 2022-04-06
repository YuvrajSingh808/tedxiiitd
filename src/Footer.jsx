import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import youTube from './assets/youTube.svg'

export default function Footer() {
    return (
        <div className="mt-28 w-full bg-gradient-to-r from-tedRed">
            <div className="flex w-3/4 mx-auto py-24 justify-between items-center flex-col sm:flex-row">
                <div className="flex flex-col sm:w-1/3 ">
                    <p className="font-montserrat font-extrabold text-white text-3xl sm:text-5xl">Get in touch!</p>
                    <div className="flex w-full space-x-24 items-center mt-20">
                        <a href="https://www.facebook.com/tedxiiitd" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="facebook" className="w-8 h-8 hover:fill-gray-200 hover:scale-110" />
                        </a>
                        <a href="https://www.instagram.com/tedxiiitd/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="instagram" className="w-10 h-10 hover:scale-110" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={youTube} alt="youTube" className="w-10 h-10 hover:scale-110" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col sm:w-2/5">
                    <p className="font-montserrat font-extrabold text-white sm:text-5xl text-3xl my-6">
                        What is TEDx?
                    </p>
                    <p className='text-customWhite sm:text-xl font-montserrat'>
                        In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx[name], where x = independently organized TED event. At our TEDx[name] event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                    </p>
                    <p className='text-customWhite sm:text-xl font-montserrat my-6'>This independent TEDx event is operated under license from TED.</p>
                </div>
            </div>
            <div className=" font-montserrat text-customWhite mx-auto w-full text-center mb-8">
                Website developed and managed by 
                <a href="https://instagram.com/yuvrajsingh808" className='hover:text-gray-200' target="_blank" rel="noopener noreferrer"> Yuvraj Singh</a>
            </div>
        </div>
    );
}