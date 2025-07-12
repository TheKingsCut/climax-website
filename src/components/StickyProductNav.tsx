import { useProductNavigation } from '@/hooks/useProductNavigation';

const productButtons = [
  { name: "MAX 5.0 Combo Series", id: "inverter-air-cooled" },
  { name: "Air Cooled Chillers", id: "air-cooled-chiller" },
  { name: "Evaporative Coolers", id: "evaporative-coolers" },
  { name: "Dehumidifiers", id: "dehumidifiers" },
  { name: "Humidifiers", id: "humidifiers" },
  { name: "Integrated PLC Control System", id: "plc-control-system" }
];

const StickyProductNav = () => {
  const { isVisible, activeSection, scrollToSection } = useProductNavigation();

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg border-b transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Products</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Professional-grade environmental control systems
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {productButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => scrollToSection(button.id)}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeSection === button.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyProductNav;