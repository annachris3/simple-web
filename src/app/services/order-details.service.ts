import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  travelDetails = [
    {
      id:1,
      travelName:'Italy',
      travelDetails:'Sardegna and Sicilia',
      travelPrice: 200,
      travelImg:'../../assets/sardenha.jpg'
    },
    {
      id:2,
      travelName:'Spain',
      travelDetails:'Canarias Island and Ibiza',
      travelPrice: 200,
      travelImg:'../../assets/spain 02.jpg'
    },
    {
      id:3,
      travelName:'Portugal',
      travelDetails:'Azores and Madeira Island',
      travelPrice: 200,
      travelImg:'../../assets/portugal 06.jpg'
    },
    {
      id:4,
      travelName:'Cyprus',
      travelDetails:'Blue Lagoons',
      travelPrice: 200,
      travelImg:'../../assets/chpre 06.jpg'
    },
    {
      id:5,
      travelName:'Greece',
      travelDetails:'Explore the islan',
      travelPrice: 200,
      travelImg:'../../assets/grecia 04.jpg'
    },
    {
      id:6,
      travelName:'Croacia',
      travelDetails:'Explore the island',
      travelPrice: 200,
      travelImg:'../../assets/croacia 03.jpg'
    }
  ]
}



