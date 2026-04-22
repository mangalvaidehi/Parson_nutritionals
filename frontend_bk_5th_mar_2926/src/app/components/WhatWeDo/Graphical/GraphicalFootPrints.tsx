import React, { useState } from 'react'
import ContactCities from '../../ContactUs/ContactAddress/ContactCities'
import './GraphicalFootPrints.css'

const HYDERABAD_LOCATION = {
  Latitude: '17.3850 N',
  Longitude: '78.4867 E',
  LocationName: 'RPA UNIBAKES PRIVATE LIMITED, Hyderabad, Telangana',
};

const HYDERABAD_DETAILS = {
  company: 'RPA UNIBAKES PRIVATE LIMITED',
  description: 'Manufacturing and packing facility for Unibic Foods India Private Limited.',
  keyFacts: ['Benchmark in GMP', 'Zero Waste Disposal'],
  salientFeatures: [
    'Location – Hyderabad, Telangana - 509207',
    'Built up Area – 2,20,000 Sq Ft.',
    'Categories Serviced – Biscuit, Cookies.',
    'Clients Served – Unibic Foods India Private Limited',
  ],
};

const overrideBlockContent = (content: string) => {
  if (content?.includes('5 States')) return content.replace('5 States', '6 States');
  if (content?.includes('5 states')) return content.replace('5 states', '6 states');
  if (content?.includes('76 acres')) return content.replace('76 acres', '90 acres');
  if (content?.includes('76 Acres')) return content.replace('76 Acres', '90 Acres');
  return content;
};

const GraphicalFootPrints = ({whatWeDoDataValue}: {whatWeDoDataValue: any}) => {
    const footPrintsHeader = whatWeDoDataValue?.Footprint?.header
    const footPrintsBlocks = whatWeDoDataValue?.Footprint?.blocks
    const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
    const footPrintsLogoBlocks = whatWeDoDataValue?.Footprint?.LogoBlock

    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

    const strapiLocations = whatWeDoDataValue?.Footprint?.MapLocation ?? [];
    const allLocations = [...(Array.isArray(strapiLocations) ? strapiLocations : []), HYDERABAD_LOCATION];

    const handleLocationSelect = (locationName: string) => {
        if (locationName === 'Hyderabad') {
            setSelectedLocation(locationName);
        } else {
            localStorage.setItem('locationName', locationName);
            window.location.href = 'about-us/#locations';
        }
    };

  return (
    <div className='relative w-full mx-auto bg-white dark:bg-black'>
        <div className='max-w-[1280px] mx-auto md:py-16 py-8'>
            <div className='relative w-full flex flex-col justify-center items-center px-8 py-8'>
                <h2 className='text-2xl md:text-2xl font-bold mb-4'>{footPrintsHeader?.title}</h2>
                <p className='text-md text-center font-medium'>{footPrintsHeader?.content}</p>
            </div>
            <div className='w-full mx-auto flex flex-col md:flex-row justify-center items-center pt-8 md:px-8 md:gap-0 gap-4'>
                <div className='map-india w-[95%] md:w-1/3 h-full mx-auto relative'>
                    <ContactCities mapLocations={allLocations} applyFilter={true} onLocationSelect={handleLocationSelect} />
                    {selectedLocation === 'Hyderabad' && (
                        <div className='absolute top-0 left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-20 text-sm'>
                            <button
                                className='absolute top-2 right-2 text-gray-400 hover:text-black font-bold text-lg leading-none'
                                onClick={() => setSelectedLocation(null)}
                            >✕</button>
                            <h3 className='font-bold text-[#16a34a] text-base mb-1'>{HYDERABAD_DETAILS.company}</h3>
                            <p className='text-gray-600 mb-2 text-xs'>{HYDERABAD_DETAILS.description}</p>
                            <p className='font-semibold text-xs mb-1'>Key Facts</p>
                            <ul className='list-disc list-inside mb-2'>
                                {HYDERABAD_DETAILS.keyFacts.map((f, i) => <li key={i} className='text-xs text-gray-700'>{f}</li>)}
                            </ul>
                            <p className='font-semibold text-xs mb-1'>Salient Features</p>
                            <ul className='list-disc list-inside'>
                                {HYDERABAD_DETAILS.salientFeatures.map((f, i) => <li key={i} className='text-xs text-gray-700'>{f}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='map-containers flex flex-wrap gap-4 w-full md:w-2/3 h-full md:justify-end justify-center'>
                    {footPrintsBlocks && footPrintsBlocks.map((block: any, index: number) => (
                        <div key={index} className='flex flex-col justify-center items-center w-[45%] md:w-[45%] h-[150px] bg-[#F0F0F9] dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl'>
                            <p className='text-center md:font-bold font-medium text-xl mb-2'>{block?.title}</p>
                            <h3 className='font-bold text-2xl'>{overrideBlockContent(block?.content)}</h3>
                        </div>
                    ))}
                    <div className='flex justify-center items-center flex-col w-[45%] md:w-[45%] h-[150px] bg-[#F0F0F9] dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl'>
                        <p className='text-center md:font-bold font-medium text-2xl'>{footPrintsLogoBlocks?.title}</p>
                        <div className='w-full flex justify-center items-center gap-4 mt-2'>
                            {footPrintsLogoBlocks && footPrintsLogoBlocks?.logos?.data.map((logo: any, index: number) => (
                                <img
                                    key={index}
                                    className='w-[35%]'
                                    src={ imageBaseUrl + logo?.attributes?.formats?.medium?.url}
                                    alt=''
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GraphicalFootPrints