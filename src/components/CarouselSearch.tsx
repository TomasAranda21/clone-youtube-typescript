import { apiBusquedas } from '@/utils/apiMovies';
import { Carousel } from '@mantine/carousel';

export function CarouselSearch() {

  return (
    <Carousel
      withIndicators
      height={35}
      slideSize="12%"
      slideGap="sm"
    //   slidesToScroll={2}
    //   withControls={false}
      classNames={{
        control:
          'border-none text-xl text-white',
      }}

    //   breakpoints={[
    //     { maxWidth: 'md', slideSize: '50%' },
    //     { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
    //   ]}
    //   loop
      align="start"
    >
    {apiBusquedas.map(e => (
        <Carousel.Slide>
         <p className={`text-center px-2 py-2 w-full rounded-lg 
         text-xs font-medium ${e.toLocaleLowerCase() == 'all' ? 'bg-white/90 text-black'
         : 'text-white bg-white/10 hover:bg-white/20 duration-100 cursor-pointer' }`}>{e}</p>
      </Carousel.Slide>
     ))} 
  

    </Carousel>
  );
}