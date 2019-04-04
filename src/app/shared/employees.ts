import {Employee} from './employee';

export const EMPLOYEES: Employee[] = [
  {
    id: 0,
    name: 'TractorStore',
    image: '/assets/images/portada.jpg',
    jobPosition: 'Chief Enterprise Officer',
    jobCode: 'CEO',
    featured: true,
    jobDescription: 'Somos una empresa con más de 20 años de experiencia en dar soluciones mecánicas a problemas del agro.'
  },
  {
    id: 1,
    name: 'Ben Affleck',
    image: '/assets/images/ben.jpg',
    jobPosition: 'Chief Technology Officer',
    jobCode: 'CTO',
    featured: false,
    jobDescription: 'El CTO, tiene la function de garantizar la calidad de los productos de software cuidando que los recursos utiliados ' +
      'sean adecuados en terminos de tiempo, costo y recurso, de manera que la satisfaccion del cliente este asegurada.'
  },
  {
    id: 2,
    name: 'Gal Gadot',
    image: '/assets/images/gal.jpg',
    jobPosition: 'Software Lead',
    jobCode: 'CTO',
    featured: false,
    jobDescription: 'Tiene la function de dirigir los projectos de software garantizando que se utilice adecuadamente la major ' +
      'tecnologia disponible, y tambien debe garantizar la calidad de todo el equipo del projecto'
  },
  {
    id: 3,
    name: 'Amy Adams',
    image: '/assets/images/amy.jpg',
    jobPosition: 'Executive User Experience Chef',
    jobCode: 'EC',
    featured: false,
    jobDescription: 'Debe garantizar que la experiencia del usuario al estar frente al producto ' +
      'possible, cuidando que la usabilidad del producto sea maximizada, debe diseñar los flujos proponiendo nuevos procesos ' +
      'los actuales antes de la implementacion de las '
  }
];

