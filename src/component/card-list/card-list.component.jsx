import React from 'react';

import { Card } from '../card/card.component';
import "./card-list.styles.css";

let no =0;
export const Cardlist = props => (
    
   <div className='card-list'>
   {
    props.scraped.map(scraped=> (
    <Card key={ no++ } scraped = {scraped}/>))
  }
   </div>
);