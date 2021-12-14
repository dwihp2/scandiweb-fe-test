import {
  BsCurrencyEuro,
  BsCurrencyYen,
  BsCurrencyDollar,
} from "react-icons/bs";

export const currencySwitchItems = [
  {
    // icon: "fas fa-dollar-sign",
    icon: <BsCurrencyDollar />,
    label: "USD",
    value: "USD",
  },
  {
    // icon: "fas fa-euro-sign",
    icon: <BsCurrencyEuro />,
    label: "EUR",
    value: "EUR",
  },
  {
    // icon: "fas fa-yen-sign",
    icon: <BsCurrencyYen />,
    label: "JPY",
    value: "JPY",
  },
];
