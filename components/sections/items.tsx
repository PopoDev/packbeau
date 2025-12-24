import { ReactNode } from "react";
import {
  BlocksIcon,
  CodeIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  PaletteIcon,
  SunMoonIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Execute Fast with World-class Quality",
  items = [
    {
      title: "Beautiful design",
      description: "Professional and modern design that stands out",
      icon: <PaletteIcon className="size-6" />,
    },
    {
      title: "Easy to customize",
      description: "Flexible and modular design to match your product or brand",
      icon: <BlocksIcon className="size-6" />,
    },
    {
      title: "Best practice code",
      description:
        "Built with best practices in mind for scalability and maintainability",
      icon: <CodeIcon className="size-6" />,
    },
    {
      title: "Responsive design",
      description: "Looks and works great on any device and screen size",
      icon: <MonitorSmartphoneIcon className="size-6" />,
    },
    {
      title: "Light and dark mode",
      description:
        "Easily choose themes and switch between light and dark mode",
      icon: <SunMoonIcon className="size-6" />,
    },
    {
      title: "Go international",
      description:
        "Support internationalization for multiple languages and regions",
      icon: <LanguagesIcon className="size-6" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-md text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 p-2">
                <div className="flex items-center gap-3">
                  <div className="text-muted-foreground">{item.icon}</div>
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground max-w-2xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
