import React from 'react';
import ContactCities from './ContactCities';

const HYDERABAD_LOCATION = {
  Latitude: '17.3850 N',
  Longitude: '78.4867 E',
  LocationName: 'RPA UNIBAKES PRIVATE LIMITED, Hyderabad, Telangana',
};

const ContactAddress = ({contactPageData}: {contactPageData: any}) => {
  const contactPageDetails = contactPageData
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL

  const strapiLocations = Array.isArray(contactPageDetails?.MapLocation) ? contactPageDetails.MapLocation : [];
  const allLocations = [...strapiLocations, HYDERABAD_LOCATION];

  return (
    <div className='w-[95%] mx-auto md:w-[50%] h-full md:py-8 md:px-8 py-2 px-2 relative mb-8 flex flex-col rounded-tl-[2rem] rounded-bl-[2rem] rounded-tr-[0] rounded-br-[0] bg-[#16a34a]'>
      <div className='w-full h-full py-16'>

        <ContactCities mapLocations={allLocations} />

        <div className='relative w-full h-auto flex flex-col gap-4 py-8'>
          {/* Existing Strapi address */}
          <div className='w-full h-auto flex items-start gap-4'>
            <span className='md:w-[15rem] w-[30rem] flex gap-2 rounded-full text-white text-md font-medium'>
              <img
                className='bg-white flex w-[2rem] h-[2rem] object-contain rounded-full filter invert p-[5px]'
                src={ imageBaseUrl + contactPageDetails?.Address?.icon?.data?.attributes?.formats?.small?.url}
                alt={contactPageDetails?.Address?.icon?.data?.attributes?.formats?.small?.name}
              />
              {contactPageDetails?.Address?.title}
            </span>
            <span className='flex gap-2 rounded-full text-white text-md font-medium'>
              {contactPageDetails?.Address?.content}
            </span>
          </div>

          {/* Hyderabad location */}
          <div className='w-full h-auto flex items-start gap-4 border-t border-green-400 pt-4'>
            <div className='flex flex-col gap-1'>
              <span className='text-white font-bold text-md'>RPA UNIBAKES PRIVATE LIMITED</span>
              <span className='text-green-100 text-sm'>Hyderabad, Telangana – 509207</span>
              <span className='text-green-100 text-sm'>Built up Area: 2,20,000 Sq Ft.</span>
              <span className='text-green-100 text-sm'>Categories: Biscuit, Cookies</span>
              <span className='text-green-100 text-sm'>Client: Unibic Foods India Private Limited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
