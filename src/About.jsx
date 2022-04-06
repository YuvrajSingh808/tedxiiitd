import graphic4 from './assets/graphic4.svg'

export default function About() {
    return (
        <div className="w-full mt-64 mx-auto" id='about'>
            <div className="">
                {/* graphic4 */}
                <img src={graphic4} alt="" srcset="" className='absolute w-full z-0' />
                <div className="w-full justify-center z-10 flex relative">
                    <div className="bg-backgroundBlack">
                        <p className="font-quattrocento text-tedRed text-8xl">About</p>
                    </div>
                </div>
            </div>
            <div className="flex my-20 w-3/4 mx-auto space-x-16">
                <div className="flex flex-col w-2/5 justify-between">
                    <div className="flex flex-col">
                        <span className="font-montserrat text-4xl text-customWhite">About TEDx,</span>
                        <span className="font-montserrat text-4xl text-tedRed">x = independently organized event</span>
                    </div>
                    <span className='mx-auto font-montserrat text-customWhite text-base'>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</span>
                </div>
                <div className="flex flex-col w-3/5">
                    <span className="font-montserrat text-4xl text-customWhite">About TED</span>

                    <span className='mx-auto font-montserrat text-customWhite text-base'>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.</span>

                    <span className='mx-auto font-montserrat text-customWhite text-base mt-6'>The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.</span>
                </div>
            </div>
            <div className="flex justify-center w-1/2 mx-auto my-36">
                <p className='font-montserrat text-xl text-customWhite text-center'>
                    Follow TED on Twitter at <a href="http://twitter.com/TEDTalks" className='hover:text-gray-200'>http://twitter.com/TEDTalks</a>, or on Facebook at <a href="http://www.facebook.com/TED" className='hover:text-gray-200'>http://www.facebook.com/TED</a>.
                </p>
            </div>
        </div>
    );
}