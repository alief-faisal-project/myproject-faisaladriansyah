import ProjectCarousel from '@/components/ProjectCarousel';
import SocialSidebar from '@/components/SocialSidebar';
import FloatingResumeButton from '@/components/FloatingResumeButton';
import backgroundHero from '@/assets/background-hero.jpg';

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundHero})` }}
    >
      <div className="min-h-screen bg-background/60 backdrop-blur-sm">
        <SocialSidebar />
        <FloatingResumeButton />
        
        <main className="py-12 md:py-20 pr-14">
          <header className="text-center mb-10 md:mb-16 px-4">
            <h1 className="text-2xl md:text-4xl font-semibold text-foreground tracking-tight">
              My Projects | Faisal Adriansyah
            </h1>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-md mx-auto">
              Kumpulan project yg telah saya kembangkan
            </p>
          </header>

          <ProjectCarousel />
        </main>
      </div>
    </div>
  );
};

export default Index;
