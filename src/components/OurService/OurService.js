import { useState } from 'react';
import { services } from 'db/Services';
import {
  ServiceTitle,
  ServiceList,
  ServiceListItem,
  ServiceListItemLink,
} from './OurService.styled';
import { ServiceInfo } from 'components/ServiceInfo/ServiceInfo';

export const OurService = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  const serviceComponents = {
    'Пакетні тури': true,
    'Індивідуальні тури': true,
    Готелі: true,
    'Екзотичний відпочинок': true,
    Авіаквитки: true,
    Трансфери: true,
    Екскурсії: true,
    'Квитки на заходи': true,
    MICE: true,
    'Медичне страхування': true,
  };

  const handleClick = service => {
    setSelectedService(service);
  };

  return (
    <>
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
        {selectedService && serviceComponents[selectedService.title] && (
          <ServiceInfo data={selectedService.data} />
        )}
      </div>
    </>
  );
};
