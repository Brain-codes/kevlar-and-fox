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

export type AllCaseStudyProp = {
  items: CaseStudyItemProp[];
};
export interface CaseStudyItemProp {
  title: string;
  image: string;
  subtitle: string;
  intro: string;
  key_issues: KeyIssue[];
  approach: Approach;
  impact: Impact[];
  conclusion: string;
}

export interface KeyIssue {
  issue: string;
  description: string;
}

export interface Approach {
  heading: string;
  description: string;
  steps: Step[];
}

export interface Step {
  step: string;
  description: string;
}

export interface Impact {
  outcome: string;
  description: string;
}
