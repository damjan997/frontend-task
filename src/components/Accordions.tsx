import { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
  isLast?: boolean;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isLast,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-[#9F938B] pb-6 ${!isLast && "border-b"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#4D4D4D] w-full flex justify-between items-center text-left text-xl poppins-light leading-[1.6]"
      >
        <span>{title}</span>
        <span className="text-[#4D4D4D] text-2xl poppins-light">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="text-[#4D4D4D] mt-2 text-sm poppins-light leading-[1.6]">
          {content}
        </div>
      )}
    </div>
  );
};

const AccordionSection: React.FC = () => {
  const items: AccordionItemProps[] = [
    {
      title: "Ingredients",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.",
    },
    {
      title: "Ingredients",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.",
    },
    {
      title: "Ingredients",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.",
    },
  ];

  return (
    <div className="big-container flex flex-col gap-8">
      {items.map((item, index) => (
        <div key={index} className="w-full md:w-[48%]">
          <AccordionItem
            title={item.title}
            content={item.content}
            isLast={index == items.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
