import React, { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

export const StarIcon: React.FC<Props> = (props) => {
  return (
    <svg
      width="49"
      height="50"
      viewBox="0 0 49 50"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.1467 26.0884C38.6923 26.528 34.5034 28.4108 31.2175 31.4502C28.124 34.8286 26.165 39.0902 25.6151 43.6378C25.6062 43.6378 24.5163 48.0196 24.5193 48.0166C24.4555 48.0166 23.4324 43.6378 23.4235 43.6378C22.8727 39.0903 20.9127 34.8291 17.8182 31.4517C14.5323 28.4122 10.3434 26.5295 5.88891 26.0899C5.88891 26.0899 1.45366 24.9926 1.50266 24.9926C1.53533 24.9569 5.88445 23.8953 5.88891 23.8953C10.3435 23.4549 14.5323 21.5717 17.8182 18.532C20.9117 15.1542 22.8707 10.8931 23.4205 6.34585C23.4294 6.34585 24.5163 1.97891 24.5163 1.96703C24.5163 1.95515 25.6032 6.34585 25.6122 6.34585C26.1623 10.893 28.1212 15.154 31.2145 18.532C34.5004 21.5717 38.6892 23.4549 43.1438 23.8953C43.1438 23.8953 47.53 24.9569 47.53 24.9926C47.53 25.0282 43.1512 26.0884 43.1467 26.0884Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export const Underline: React.FC<Props> = (props) => {
  return (
    <svg
      width="252"
      height="98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.392 55.003c47.25-7.52 163.136-20.45 248.677-12.006"
        stroke="currentcolor"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M248.133 42.653c-34.887 1.606-113.435 9.248-148.522 26.974M100.418 70.706c13.761-2.548 50.25-5.304 86.12 4.056"
        stroke="currentcolor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const CloseNav: React.FC<Props> = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#CFE7FF" />
      <line
        x1="12.7203"
        y1="11.6594"
        x2="28.3408"
        y2="27.2799"
        stroke="#CFE7FF"
        stroke-width="1.5"
      />
      <line
        x1="11.6596"
        y1="27.2799"
        x2="27.2801"
        y2="11.6594"
        stroke="#CFE7FF"
        stroke-width="1.5"
      />
    </svg>
  );
};

export const Burger: React.FC<Props> = (props) => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="0.111145" width="47" height="46" rx="23" fill="#000511" />
      <line
        x1="12.4547"
        y1="17.3611"
        x2="34.5454"
        y2="17.3611"
        stroke="#CFE7FF"
        stroke-width="1.5"
      />
      <line
        x1="12.4547"
        y1="22.3611"
        x2="34.5454"
        y2="22.3611"
        stroke="#CFE7FF"
        stroke-width="1.5"
      />
      <line
        x1="12.4547"
        y1="27.3611"
        x2="34.5454"
        y2="27.3611"
        stroke="#CFE7FF"
        stroke-width="1.5"
      />
    </svg>
  );
};



export const ArrowUpRight: React.FC<Props> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.4301 18.8201C14.2401 18.8201 14.0501 18.7501 13.9001 18.6001C13.6101 18.3101 13.6101 17.8301 13.9001 17.5401L19.4401 12.0001L13.9001 6.46012C13.6101 6.17012 13.6101 5.69012 13.9001 5.40012C14.1901 5.11012 14.6701 5.11012 14.9601 5.40012L21.0301 11.4701C21.3201 11.7601 21.3201 12.2401 21.0301 12.5301L14.9601 18.6001C14.8101 18.7501 14.6201 18.8201 14.4301 18.8201Z"
        fill="#CFE7FF"
      />
      <path
        d="M20.3301 12.7501H3.50012C3.09012 12.7501 2.75012 12.4101 2.75012 12.0001C2.75012 11.5901 3.09012 11.2501 3.50012 11.2501H20.3301C20.7401 11.2501 21.0801 11.5901 21.0801 12.0001C21.0801 12.4101 20.7401 12.7501 20.3301 12.7501Z"
        fill="#CFE7FF"
      />
    </svg>
  );
};




