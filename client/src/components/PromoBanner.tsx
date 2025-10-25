import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import bannerImage1 from '@assets/generated_images/Casino_dealer_promotional_banner_a728a93f.png';
import bannerImage2 from '@assets/generated_images/Slot_machine_promo_banner_eb0b0df8.png';
import bannerImage3 from '@assets/generated_images/Lottery_promo_banner_5bc31d9e.png';

interface PromoSlide {
  id: string;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
}

const promoSlides: PromoSlide[] = [
  {
    id: '1',
    image: bannerImage1,
    badge: 'IDN LIVE',
    title: 'CRASH GAME PERTAMA IDNLIVE',
    subtitle: 'REBUT TANPA, JADILAH PENGUASA!',
    cta: 'MAIN SEKARANG'
  },
  {
    id: '2',
    image: bannerImage2,
    badge: 'SLOT GACOR',
    title: 'JACKPOT MEGA MENANTI',
    subtitle: 'RAIH KEMENANGAN HINGGA 1000X!',
    cta: 'COBA SEKARANG'
  },
  {
    id: '3',
    image: bannerImage3,
    badge: 'LOTTERY',
    title: 'UNDIAN BERHADIAH BESAR',
    subtitle: 'MENANGKAN HADIAH FANTASTIS!',
    cta: 'IKUT UNDIAN'
  }
];

export default function PromoBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="px-4">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {promoSlides.map((slide) => (
            <div 
              key={slide.id}
              className="flex-[0_0_100%] min-w-0"
            >
              <div 
                className="relative rounded-xl overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all"
                data-testid={`card-promo-banner-${slide.id}`}
                onClick={() => console.log(`Promo ${slide.badge} clicked`)}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-3">
        {promoSlides.map((slide, index) => (
          <button
            key={slide.id}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex 
                ? 'w-6 bg-primary' 
                : 'w-2 bg-muted-foreground/30'
            }`}
            data-testid={`button-carousel-dot-${index}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
