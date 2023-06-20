export const itemFormValidation = {
  itemNameRules: [
    (value: string) => {
      if (value) return true;

      return "Item Name Should Not be Empty.";
    },
  ],
  itemDescriptionRules: [
    (value: string) => {
      if (value) return true;

      return "Description Should Not be Empty.";
    },
  ],
  itemPriceRules: [
    (value: string) => {
      if (value) return true;

      return "Item Price Should Not be Empty.";
    },
    (value: number) => {
      if (Number.isInteger(Number(value))) return true;

      return "Item Price Should Number.";
    },
    (value: number) => {
      if (Number(value) > 0) return true;

      return "Item Price Should greter than 0.";
    },
  ],
  itemMinPriceRules: [
    (value: number) => {
      if (value) return true;

      return "Item Min Price Should Not be Empty.";
    },
    (value: number) => {
      if (Number.isInteger(Number(value))) return true;

      return "Item Min Price Should Number.";
    },
    (value: number) => {
      if (Number(value) > 0) return true;

      return "Item Min Price Should greter than 0.";
    },
  ],
  itemMaxPriceRules: [
    (value: string) => {
      if (value) return true;

      return "Item Max Price Should Not be Empty.";
    },
    (value: number) => {
      if (Number.isInteger(Number(value))) return true;

      return "Item Max Price Should Number.";
    },
    (value: number) => {
      if (Number(value) > 0) return true;

      return "Item Max Price Should greter than 0.";
    },
  ],
};
