import tempImage from './assets/tempImage.svg'
import graphic3 from './assets/graphic3.svg'
import papacj from './assets/speakers/papacj.png'
import anna from './assets/speakers/anna.png'
import bhagyashree from './assets/speakers/bhagyashree.png'
import shabnam from './assets/speakers/shabnam.png'
import arko from './assets/speakers/arko.png'
import anshul from './assets/speakers/anshul.png'

export default function Speakers(props) {
    // array of 10 integers
    const speakers = [
        {
            name: 'Papa CJ',
            description: 'Papa CJ is a world-renowned stand-up comedian, executive coach, and published author who holds an MBA degree from the University of Oxford. He has been invited to speak at Harvard Business School and written for Harvard Business Review.',
            img: papacj
        },
        {
            name: 'Anna Chandy',
            description: 'Anna Chandy is a Social Psychologist and the Founder of Anna Chandy & Associates, an organisation that provides counselling services to clients in nearly 40 countries. She has been involved in the field of mental health for three decades.',
            img: anna
        },
        {
            name: 'Shabnam Hashmi',
            description: 'Shabnam Hashmi is an Indian social activist and human rights campaigner. She was amongst the 91 women from India nominated globally for the Nobel Peace Prize-2005. Since 1989 she has spent most of her time combating communal and fundamentalist forces in India.',
            img: shabnam
        },
        {
            name: 'Anshul Bhagi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac risus amet, elementum, amet. Et diam maecenas tincidunt risus feugiat imperdiet habitant. Massa at nisl quam risus nibh eleifend pretium, urna, nec. Faucibus odio massa in in.',
            img: anshul
        },
        {
            name: 'Arko Mukherjee',
            description: 'Arko Pravo Mukherjee, better known by the mononym Arko, is an Indian singer-songwriter and music composer who has worked in the Bollywood film industry since 2012. Arko has worked in 30+ films, with Kapoor & Sons, Rustom, Hate Story 2, Jism 2, and Kesari being the notable ones.',
            img: arko
        },
        {
            name: 'Arun Singh',
            description: '',
            img: null
        },
        {
            name: 'Bhagyashree',
            description: '',
            img: bhagyashree
        },
        {
            name: 'Mithoon',
            description: '',
            img: null
        },
        {
            name: 'RJ Ginnie',
            description: '',
            img: null
        },
        {
            name: '',
            description: '',
            img: null
        }
    ];
    // var counter = 0;
    // console.log(speakers);
    return (
        <div className="w-4/5 mt-60 mx-auto" id='speakers'>
            {/* graphic3 image */}
            <img src={graphic3} alt="graphic3" className='w-1/2 -mt-64 ml-4 absolute z-0' />
            <div className="mb-16 z-10 relative">
                <span className="font-quattrocento font-bold text-customWhite sm:text-4xl text-2xl">Our</span>
                <div className="bg-backgroundBlack z-10">
                    <p className="font-quattrocento text-tedRed sm:text-8xl text-4xl">Speakers</p>
                </div>
            </div>
            
                <div className="flex flex-col sm:flex-row justify-between sm:space-x-16 my-20">
                    <SpeakerTile name={speakers[0].name} img={speakers[0].img} description={speakers[0].description} />
                    <SpeakerTile name={speakers[1].name} img={speakers[1].img} description={speakers[1].description} />
                </div>
                <div className="sm:pl-20 flex-col sm:flex-row flex justify-between sm:space-x-16 my-20">
                    <SpeakerTile name={speakers[2].name} img={speakers[2].img} description={speakers[2].description} />
                    <SpeakerTile name={speakers[3].name} img={speakers[3].img} description={speakers[3].description} />
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:space-x-16 my-20">
                    <SpeakerTile name={speakers[4].name} img={speakers[4].img} description={speakers[4].description} />
                    <SpeakerTile name={speakers[5].name} img={speakers[5].img} description={speakers[5].description} />
                </div>
                <div className="sm:pl-20 flex-col sm:flex-row flex justify-between sm:space-x-16 my-20">
                    <SpeakerTile name={speakers[6].name} img={speakers[6].img} description={speakers[6].description} />
                    <SpeakerTile name={speakers[7].name} img={speakers[7].img} description={speakers[7].description} />
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:space-x-16 my-20">
                    <SpeakerTile name={speakers[8].name} img={speakers[8].img} description={speakers[8].description} />
                    <SpeakerTile name={speakers[9].name} img={speakers[9].img} description={speakers[9].description} />
                </div>
        </div>
    );
}

function SpeakerTile(props) {
    return (
        <div className="flex items-center my-6 z-10">
            <div className="w-1/3">
                <div className="w-full flex justify-center">
                    {/* tempImage */}
                    <img src={props.img ? props.img : tempImage} alt="tempImage" className='w-full' />
                    {/* <img src={props.image} alt="graphic1" className='w-1/2 mt-6' /> */}
                </div>
            </div>
            <div className="w-2/3 ml-12">
                <div className="w-full text-customWhite font-quattrocento font-bold text-5xl flex justify-start">
                    {props.name ? props.name : 'Full name'}
                </div>
                <p className='text-customWhite text-sm font-montserrat mt-8 font-light'>
                    {props.description ? props.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac risus amet, elementum, amet. Et diam maecenas tincidunt risus feugiat imperdiet habitant. Massa at nisl quam risus nibh eleifend pretium, urna, nec. Faucibus odio massa in in."}
                </p>
            </div>
        </div>
    );
}