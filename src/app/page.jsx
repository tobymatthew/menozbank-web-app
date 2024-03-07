"use client";
import { Container } from '@/styles/container'

import HeaderCol from './pageSection/headerCol';
import RatingCol from './pageSection/ratingCol';
import FeaturesCol from './pageSection/FeaturesCol';
import ListFeaturesCol from './pageSection/listFeaturesCol';
import ListFeaturesCol2 from './pageSection/listFeaturesCol2';
import ServiceCol from './pageSection/serviceCol';
import NavHome from '@/components/navHome';



export default function Home() {
  return (
     <main>
      
      <Container>
      <NavHome/>
       <HeaderCol/>
       <RatingCol/>
       <FeaturesCol/>
       <ListFeaturesCol/>
       <ListFeaturesCol2/>
       <ServiceCol/>
      </Container>
     </main>
  );
}
