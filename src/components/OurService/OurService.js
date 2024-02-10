import { Container } from 'components/StyledComponents/Container';
import TicketService from 'components/TicketService/TicketService';
import { useState } from 'react';
import { services } from 'db/Services';
import {
  ServiceTitle,
  ServiceList,
  ServiceListItem,
  ServiceListItemLink,
} from './OurService.styled';
import PacketTour from 'components/PacketTour/PacketTour';
import IndividualTour from 'components/IndividualTour/IndividualTour';
import HotelService from 'components/HotelServices/HotelServices';
import ExoticService from 'components/ExoticService/ExoticService';
import TransferService from 'components/TransferService/TransferService';
import ExcursionService from 'components/ExcursionService/ExcursionService';
import EventTicket from 'components/EventTicket/EventTicket';
import MiceService from 'components/MiceService/MiceService';
import InsuarenceService from 'components/InsuarenceService/InsuarenceService';

export const OurService = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleClick = service => {
    setSelectedService(service);
  };

  return (
    <Container>
      <ServiceTitle>Наші послуги</ServiceTitle>
      <ServiceList>
        {services.map(service => (
          <ServiceListItem
            key={service.id}
            onClick={() => handleClick(service)}
          >
            <ServiceListItemLink>
              <svg width="40" height="40" fill="var(--grey-gold)">
                <use href={service.image}></use>
              </svg>
              {service.title}
            </ServiceListItemLink>
          </ServiceListItem>
        ))}
      </ServiceList>
      <div>
        {selectedService && (
          <div>
            {selectedService.title === 'Пакетні тури' && <PacketTour />}
            {selectedService.title === 'Індивідуальні тури' && (
              <IndividualTour />
            )}
            {selectedService.title === 'Готелі' && <HotelService />}
            {selectedService.title === 'Екзотичний відпочинок' && (
              <ExoticService />
            )}
            {selectedService.title === 'Авіаквитки' && <TicketService />}
            {selectedService.title === 'Трансфери' && <TransferService />}
            {selectedService.title === 'Екскурсії' && <ExcursionService />}
            {selectedService.title === 'Квитки на заходи' && <EventTicket />}
            {selectedService.title === 'MICE' && <MiceService />}
            {selectedService.title === 'Медичне страхування' && (
              <InsuarenceService />
            )}
          </div>
        )}
      </div>
    </Container>
  );
};
