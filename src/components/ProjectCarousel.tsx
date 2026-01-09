import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

import bannerCompanyDesktop from '@/assets/banner-company-desktop.jpg';
import bannerCompanyMobile from '@/assets/banner-company-mobile.jpg';
import bannerPetaniDesktop from '@/assets/banner-petani-desktop.png';
import bannerPetaniMobile from '@/assets/banner-petani-mobile.png';
import bannerDemoDesktop from '@/assets/banner-demo-desktop.jpg';
import bannerDemoMobile from '@/assets/banner-demo-mobile.jpg';
import bannerShowroom from '@/assets/banner-showroom-desktop.png'

const projects = [
  {
    id: 1,
    title: "Product Showcase Busalime Cairan Pencuci Piring",
    description:
      "Website company profile untuk produk Busalime dengan desain modern dan profesional. Menampilkan informasi produk, dan  detail perusahaan .",
    desktopBanner: bannerCompanyDesktop,
    mobileBanner: bannerCompanyMobile,
    url: "https://busalime.vercel.app",
  },
  {
    id: 2,
    title: "Pemetaan Kelompok Petani Padi Wilayah Kabupaten Pandeglang",
    description:
      "Sistem pemetaan digital untuk kelompok petani padi di Kabupaten Pandeglang. Membantu identifikasi lokasi dan data kelompok tani.",
    desktopBanner: bannerPetaniDesktop,
    mobileBanner: bannerPetaniMobile,
    url: "https://pemetaanpoktan.vercel.app",
  },
  {
    id: 3,
    title: "Website Showroom Mobil Terintergrasi dengan Sistem Admin Panel",
    description: "Akan segera dideploy...",
    desktopBanner: bannerShowroom,
    mobileBanner: bannerShowroom,
  },
  {
    id: 4,
    title: "Website Showcase Product dengan UI Modern",
    description: "Coming soon....",
    desktopBanner: "https://i.postimg.cc/Qd37yLHH/Design-for-Starbucks.jpg",
    mobileBanner: "https://i.postimg.cc/Qd37yLHH/Design-for-Starbucks.jpg",
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    }
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [updateSlidesPerView]);

  const maxIndex = Math.max(0, projects.length - slidesPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const slideWidth = 100 / slidesPerView;

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div className="relative">
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="carousel-slide"
                style={{ width: `${slideWidth}%` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  desktopBanner={project.desktopBanner}
                  mobileBanner={project.mobileBanner}
                  url={project.url}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="nav-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="nav-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <nav className="carousel-nav" aria-label="Carousel navigation">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${currentIndex === index ? 'carousel-dot-active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </nav>
    </section>
  );
};

export default ProjectCarousel;
