import { CheckCircle2 } from "lucide-react";
const ServiceItem = ({ text }:{text:string}) => (
  <li className="flex items-start gap-3 backdrop-blur-lg backdrop-brightness-50 bg-it4a-secondary/20 p-4 rounded-xl border border-it4a-primary shadow-2xs shadow-white">
    <span className="text-it4a-primary">
      <CheckCircle2 />
    </span>
    <span className="text-gray-100">{text}</span>
  </li>
);

export default ServiceItem;
