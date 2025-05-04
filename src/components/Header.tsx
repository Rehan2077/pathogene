import { Dna } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-background:80 sticky top-0 z-40 w-full border-b px-6 backdrop-blur-xl">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/">
          <div className="flex items-center gap-2 text-emerald-600">
            <Dna className="h-6 w-6" />
            <span className="text-xl font-bold">PathoGene</span>
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-10">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground hidden text-sm font-medium transition-colors sm:block"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground hidden text-sm font-medium transition-colors sm:block"
            >
              How It Works
            </Link>
            <Link href="/test">
              <Button className="ml-2 cursor-pointer bg-emerald-600 hover:bg-emerald-700">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
