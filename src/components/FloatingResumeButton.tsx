import { Download } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const FloatingResumeButton = () => {
  const resumeUrl = 'https://colab.research.google.com/drive/1gKUUiOR-gGB9Vt1PanH4pbFNrVE_HtJn?usp=drive_link';

  const handleDownload = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleDownload}
            className="floating-resume-btn"
            aria-label="Download Resume"
          >
            <Download className="w-6 h-6 text-primary-foreground" />
          </button>
        </TooltipTrigger>
        <TooltipContent 
          side="left" 
          className="bg-card/90 backdrop-blur-md border-border/50 text-foreground px-3 py-2 rounded-lg shadow-xl"
        >
          <p className="font-medium">Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingResumeButton;
