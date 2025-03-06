import {
  FileChartColumn,
  LucideIcon,
  MailOpen,
  ShoppingBag,
  Target,
  WalletCards,
} from "lucide-react";

interface FooterTheme {
  title: string;
  icons: LucideIcon;
}

const FooterArr: FooterTheme[] = [
  {
    title: "점신",
    icons: FileChartColumn,
  },
  {
    title: "2025 운세",
    icons: Target,
  },
  {
    title: "타로",
    icons: WalletCards,
  },
  {
    title: "상담",
    icons: MailOpen,
  },
  {
    title: "점신몰",
    icons: ShoppingBag,
  },
];

const Footer = () => {
  return (
    <div className="h-[70px] border-t w-[430px] bg-white fixed bottom-0 border-gray-200 flex">
      {FooterArr.map((Data, idx) => (
        <div className="w-[25%] h-full flex flex-col justify-center text-gray-800 items-center space-y-2 text-[10px] pt-1" key={idx}>
          <Data.icons />
          <div>
            {Data.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
