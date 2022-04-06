import graphic1 from './assets/graphic1.svg';
import graphic2 from './assets/graphic2.svg';

export function Details() {
    return (
        <div className="flex items-center flex-col">
            {/* red text saying found missing */}
            <span className="mt-80 text-tedRed mx-auto text-5xl font-montserrat font-semibold uppercase" id='details'>
                Found Missing
            </span>
            <div className="flex my-10 w-4/5 text-customWhite space-x-8">
                <div className="w-1/3 font-quattrocento text-5xl">
                    <span>When</span>
                    {/* graphic1 */}
                    <div className="w-full flex justify-center">
                        <img src={graphic1} alt="graphic1" className='w-1/2 mt-6' />
                    </div>
                    <div className="w-full flex flex-col justify-start">
                        <div className="flex align-baseline">
                            <span className='stroke-text-tedRed font-lato text-9xl'>16</span>
                            <span className='font-lato'>th</span>
                        </div>
                        <p className='uppercase text-customWhite font-lato'>April</p>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="h-16"></div>
                    <div className="text-center font-montserrat">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sagittis est sit lectus sagittis. At suspendisse neque, sed eu amet nulla. Amet, pharetra faucibus adipiscing sed. Ac et dui eget enim, velit fringilla. Scelerisque ullamcorper cursus amet ullamcorper quam. Id amet, nec massa tortor in ut. Tortor duis lectus massa gravida fringilla mattis quam proin enim. Tellus congue in fringilla donec sagittis, amet auctor quis. Ac viverra non, bibendum augue quis adipiscing. Suscipit facilisis arcu integer etiam volutpat tincidunt quam. Dis pretium non amet in ornare diam arcu, massa. Bibendum tellus morbi et nam. Purus, scelerisque morbi mauris volutpat elit nec dignissim.
                    </div>
                </div>
                <div className="w-1/3 font-quattrocento text-5xl">
                    <span>Where</span>
                    {/* graphic1 */}
                    <div className="w-full flex justify-center my-6">
                        <img src={graphic2} alt="graphic2" className='w-full' />
                    </div>
                    <div className="w-full flex justify-end">
                        <span className='stroke-text-tedRed font-lato text-6xl'>IIIT Delhi</span>
                    </div>
                </div>
            </div>
        </div>
    );
}