import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import {
  BsCurrencyEuro,
  BsCurrencyYen,
  BsCurrencyDollar,
} from "react-icons/bs";

export const currencySwitch = [
  {
    icon: "fas fa-dollar-sign",
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subCurrency: [
      {
        icon: <BsCurrencyDollar />,
        currency: "USD",
      },
      {
        icon: <BsCurrencyEuro />,
        currency: "EUR",
      },
      {
        icon: <BsCurrencyYen />,
        currency: "JPY",
      },
    ],
  },
];
