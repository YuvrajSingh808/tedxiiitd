export default function Tickets() {
    return (
        <div className="w-4/5 mt-64 mx-auto z-10" id="tickets">
            <div className="bg-backgroundBlack z-10">
                <p className="font-quattrocento text-tedRed text-8xl">Tickets</p>
            </div>
            <div className="mt-20 font-montserrat font-medium text-2xl w-2/3 text-customWhite z-10 bg-backgroundBlack leading-8">
                <p className="mb-8">Finally, the wait is over! TEDxIIITD event passes are finally out for you guys, our guests. Book your spot now!<br></br></p>

                <p className="mb-8">Event Date and Time: Gates open at 9AM on March 25, 2022</p>

                <p className="mb-8">Location: Main Auditorium, Indraprastha Institute of Information Technology Delhi</p>
            </div>
            <div className="mt-44 z-10 w-full flex justify-center">
                <button className="px-12 py-6 bg-customWhite rounded-3xl transition duration-350 ease-in-out font-lato text-2xl hover:bg-gray-200">
                    Book Now
                </button>
            </div>
        </div>
    );
}