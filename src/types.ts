export type NavItemsProps = {
  items: {
    title: string;
    heading: string;
    url: string;
    delay: number;
  }[];
};

export type eachCoreValueProp = {
  title: string;
  description: string;
};

export type allCoreValueProp = {
  items: eachCoreValueProp[];
};

export type AllExpertiesProp = {
  items: EachExpertiesProp[];
};

export type EachExpertiesProp = {
  title: string;
  image: string;
  imageLeft: boolean;
  items: ChildExpertiesProp[];
};

export type ChildExpertiesProp = {
  title: string;
  description: string;
};
