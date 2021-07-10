import { Injectable } from '@nestjs/common';
import { Routes } from './routes';

@Injectable()
export class AppService {
  private readonly routes: Routes = [
    {
      title: 'Regente Feijó -> São Paulo',
      startPosition: '-22.2147503, -51.2990424',
      endPosition: '-23.5506507, -46.6333824',
    },
    {
      title: 'São Paulo -> Peru',
      startPosition: '-23.5506507, -46.6333824',
      endPosition: '-6.8699697-75.0458515',
    },
    {
      title: 'Peru -> Machu Picchu',
      startPosition: '-6.8699697, -75.0458515',
      endPosition: '-13.16441865, -72.54476397431836',
    },
    {
      title: 'Machu Picchu -> Torres del Paine',
      startPosition: '-13.16441865, -72.54476397431836',
      endPosition: '-51.0405776, -72.98465008755775',
    },
    {
      title: 'Oiapoque -> Chuí',
      startPosition: '-33.6866074, -53.4723288',
      endPosition: '-33.6895237, -53.454704',
    }
  ];

  getRoutes() {
    return this.routes;
  }
}