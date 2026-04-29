import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    name: 'Shuvaloy',
    bgUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    bgColor: 'from-black via-black/60 to-black/40',
  },
  {
    id: 2,
    name: 'Izhar Castle',
    bgUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    bgColor: 'from-black via-black/50 to-black/30',
  },
  {
    id: 3,
    name: 'NN Jahanara Habib Tower',
    bgUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
    bgColor: 'from-black via-black/70 to-black/50',
  },
  {
    id: 4,
    name: 'NNSEL Razia Lodge',
    bgUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    bgColor: 'from-black/80 via-black/50 to-blue-950/40',
  },
  {
    id: 5,
    name: 'NNSEL Water Lily Mansion',
    bgUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
    bgColor: 'from-black via-black/60 to-black/40',
  },
  {
    id: 6,
    name: "Dipa's Domicile",
    bgUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80',
    bgColor: 'from-black/90 via-black/60 to-blue-900/30',
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setTextVisible(false);
      setPrevSlide(currentSlide);

      setTimeout(() => {
        setCurrentSlide(index);
      }, 600);

      setTimeout(() => {
        setIsTransitioning(false);
        setPrevSlide(null);
        setTextVisible(true);
      }, 1400);
    },
    [currentSlide, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section id="home" className="relative w-full h-screen overflow-hidden bg-black">

        {/* Previous slide fading out */}
        {prevSlide !== null && (
          <div
            key={`prev-${prevSlide}`}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slides[prevSlide].bgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0,
              transition: 'opacity 1.2s ease',
            }}
          />
        )}

        {/* Current slide fading in with Ken Burns */}
        <div
          key={`curr-${currentSlide}`}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${slide.bgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'kenBurns 6s ease-out forwards',
          }}
        />

        {/* Dark gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${slide.bgColor} z-10`} />
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">

          {/* NNSEL Giant Title */}
          <div
            className="overflow-hidden mb-4"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(-30px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            <h1
              className="select-none"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(10rem, 8vw, 8rem)',
                lineHeight: 1,
                letterSpacing: '0.05em',
                background: 'linear-gradient(135deg, #f5d066 0%, #d4a017 30%, #8B6914 60%, #f5d066 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 20px rgba(212, 160, 23, 0.3))',
              }}
            >
              NNSEL
            </h1>
          </div>

          {/* Tagline */}
          <div
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
            }}
          >
            <p
              className="text-yellow-500 mb-6 h-20"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(2.0rem, 2.5vw, 1.4rem)',
                letterSpacing: '0.35em',
                fontWeight: 600,
              }}
            >
              SAFE CONSTRUCTION BETTER QUALITY
            </p>
          </div>

          {/* Description */}
          <div
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s',
            }}
          >
            <p
              className="text-white/80 max-w-lg mx-auto mb-10 leading-relaxed h-20"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(0.95rem, 1.5vw, 1rem)',
                fontWeight: 300,
              }}
            >
              Crafting exceptional living spaces where architectural excellence meets timeless elegance. Your vision, our masterpiece.
            </p>
          </div>

          {/* CTA Button */}
          <div
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s',
            }}
          >
            <a
              href="#projects"
              className="relative overflow-hidden group inline-block"
              style={{
                background: 'linear-gradient(135deg, #d4a017, #b8860b)',
                color: '#000',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.3em',
                padding: '1rem 3rem',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              <span className="relative z-10">VIEW PROJECTS</span>
              <div className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Featured Label — Bottom Left */}
        <div
          className="absolute bottom-16 left-8 z-20"
          style={{
            opacity: textVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
          }}
        >
          <p
            className="text-yellow-600 mb-1"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              fontWeight: 600,
            }}
          >
            FEATURED
          </p>
          <p
            className="text-white font-bold"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            }}
          >
            {slide.name}
          </p>
        </div>

        {/* Slide Indicators — Bottom Center */}
        <div className="absolute bottom-15 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="transition-all duration-500"
              style={{
                width: i === currentSlide ? '2.5rem' : '4.5rem',
                height: '4px',
                background:
                  i === currentSlide
                    ? 'linear-gradient(90deg, #d4a017, #f5c842)'
                    : 'rgba(255,255,255,0.25)',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            />
          ))}
        </div>
      </section>

      {/* ─── Fixed FABs — position:fixed so they show on ALL pages at ALL scroll positions ─── */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/880XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
            textDecoration: 'none',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Chat bot — your exact image */}
        <button
          title="Chat"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#6B7FD4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABSVJREFUWIXtl1tsVUUUhr/Zl3Pp7bTQVqAF2gK23ETTAtVAhApajIAYiRggESkvEh6MURBrgqIxGBIS25CQgEZ5lcRIEElIIGo0tRCJQqAq19IW5JTeT3suey8fDodzdruLlvKm/9Oef9as9c+aWTOz4b8ONdIB7e2Spfkii1GqSCHjOrrDi5RSbUrkguh6XVFeetsDECAKlKQyHT3RxUqzt4JaDHgSfNvtUNKZAkPXgqZp7Jycm/aJSyzBhXSi6tMakF0IT3BiY9Otvr4JJsZnoJ52k5oqIBWmoQV9um9pYb7nDPNqixE5DdTS+OHeVDtt6FApB8agSXFXKDLfg6dxuOD3QjRm54aiA6eutfe9ilCKkIMwe7Cdi4A4apaVThLhmCATRho8Acu29f7+2P49byxfMJyNq4DcgI+dG8p3AoH7DZ6ALaKeXVi2bUrhWNd+w43cvnYOfp+Rn8rFLJtozMYS5z5qu+XcA7qhkeE3SfPpSRG26PVvP8+yzQf+WcC8srzA+qVTUwILXaEIkajlOoNrN/pc+cx0k5LCTHyeuJDigjG8uHR24ZennHYKoLpOVohiJULmS3N6lrxQ7ssBsCwh2D2ALcKl1h6O/tzMrc4wklJNPzScc3gLZKSxrLKUR6Y9hGlozJyajdeMi2htDQ/sres9bCt6NNRXhw6WHFbP1MtmhPqEj92rYkzMiQdo7wkTiVoc+u4K739+hkjMJQvdl4ZySrGwfCYbV1QQyDApK84GQGxF7TvBVL2vaQhvJQi/yd3gMcsmErW43NbjCK4bpmvKAQztzoqK8P2pc5y9dJOu3ij94Vg8oCZkZiX3hsCbGjApQeSkJVMbjdkAfNt4/W7wSVNm8NRza8nKHrqjs7w5LH94PdPGJEpdOPrT7wD0hZKZmzBeTx1W7CjDTF/yOyFlIJIc7PX6UUpzzYJH96FQmHqyLxKJAmCnVE5erkOA8xzQUw5mQ4s3Kqcnq/HKn2f5peE4ncGbQwS099+gofUEf9xObsry6RMB8PuSxabrzqPH0bJTStw0dXRd8fjMfFYuiK9SNBLmr9ZrjipIQERo6b5M1AoDkJ+fR3XlNHwenQx/UkA05hxrAM3ARIBgSkkrICvNQ0dPmI9q5vLolLF8/eM1gp0DDgetIY+jbZomj5UVsWllBUpBUUEGKiWzLS3Ru98hawADqAd2AQR7Fde7FIWBuEqfqZOd7qUrFGFNVQlrqkqGzLzht/IhHICuKYoLMglkpAgUxdWrSQEX+1oxjm1RH1fXSavAKiDr+Hlt3CuV1qyEkd+r4/X46A/HiMRsxHYGysoYlAFDke43ycv2YhjO9b5wPtqM0KSg+3RX08IrobY81wdJZ19kP7DRdWqDMNx7YDC8ht5UMj6z7C5RdeAyUOR6GwbSzE2I2gb0/ivv94CmlKR5jSPF4zJmuPW73oZKKQF2dXTIPs0bqbaFMqXwudn6PfqTbryIhDVNO2PF9D2T8/1Xhxqgo7BG/Ch9IFiyL4BtBIEW1wzcF+bvyMIeyEUZQprRzMkdsWFtbbMWxACOjj4Dq1frXCn9ApGXST5y+1BqC40ffOawXbTDQCvcBuo9IAQya/QC5m5fh6iDQzuUTebkwyg9Em+LCVQAhUA/Iqs5UXNk9EtgU+D+dyEaYq1EOQrNAvkGm62crDkLw1TBiCD2IZT+LpDu4JV2Dt37OurOVWhZHYhxkZMbOh1moxYAUFFbipJ1CPkggtLOEx7Yz6+73R+M/yMFfwMwaNgOuo66+AAAAABJRU5ErkJggg=="
            alt="Chat"
            style={{ width: '28px', height: '28px', objectFit: 'contain' }}
          />
        </button>
      </div>

      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}