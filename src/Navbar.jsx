import tedxiiitd from './assets/tedxiiitlogo.png';
import ScrollIntoView from 'react-scroll-into-view'

export function Navbar(props) {
    // console.log(props);
    return (
        <div>
            {/* function to return navbar with logo and links tailwind */}
            <nav className="flex items-center justify-between flex-wrap bg-backgroundBlack py-12 px-16">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    {/* import tedxiiitd logo*/}
                    <img src={tedxiiitd} alt="tedxiiitd" className="h-8" />
                </div>
                <div className="flex space-x-12 text-customWhite">
                    <ScrollIntoView selector="#tickets">
                        <button className="link link-underline pb-2">
                            Book Tickets
                        </button>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#speakers">
                        <button className="link link-underline pb-2">
                            Speakers
                        </button>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#about">
                        <button className="link link-underline pb-2">
                            About
                        </button>
                    </ScrollIntoView>
                </div>
            </nav>
        </div>
    );
}