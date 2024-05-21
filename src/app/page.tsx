import Wrapper from "./Wrapper";

export const metadata = {
  title: "Kevlar & Fox Consulting",
  description:
    "Elevating organizations through expert PR strategies, cutting-edge digital transformations, and empowering training solutions.",
  url: "https://kevlarandfox.com",
  siteName: "Kevlar & Fox | Home Page ",
  themeColor: "#3B9BFF",
  images: [
    {
      url: "/images/logo-full.svg",
      width: 800,
      height: 600,
    },
    {
      url: "/images/logo-full.svg",
      width: 1800,
      height: 1600,
    },
  ],
  icons: {
    url: "/images/logo-one.svg",
    apple: "/images/logo-one.svg",
    shortcut: "/images/logo-one.svg",
    other: {
      rel: "kevlar and fox logo",
      url: "/images/logo-one.svg",
    },
  },
};

export default function Page() {
  return (
    <>
      <Wrapper />
    </>
  );
}
