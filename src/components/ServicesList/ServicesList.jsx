import { nanoid } from 'nanoid';

import dataServices from '../../data/services';
import ServiceCard from 'components/ServiceCard/ServiceCard';
import { StyledServicesList } from './ServicesList.styled.js';

export default function ServicesList() {
  return (
    <StyledServicesList>
      {dataServices.map(service => {
        return <ServiceCard key={nanoid()} service={service} />;
      })}
    </StyledServicesList>
  );
}
