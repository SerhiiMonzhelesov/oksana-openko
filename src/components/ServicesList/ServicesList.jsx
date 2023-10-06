import { nanoid } from 'nanoid';

import dataServices from '../../data/services';
import ServiceCard from 'components/ServiceCard/ServiceCard';
import { StyledServiceList } from './StyledServiceList';

export default function ServicesList() {
  return (
    <StyledServiceList>
      {dataServices.map(service => {
        return <ServiceCard key={nanoid()} service={service} />;
      })}
    </StyledServiceList>
  );
}
