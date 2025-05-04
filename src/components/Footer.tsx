import { Dna } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background w-full border-t p-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="flex items-center gap-2 text-emerald-600">
          <Dna className="h-5 w-5" />
          <p className="text-sm font-medium">
            © 2025 PathoGene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
