import metadata from "data/metadata";

export default {
  titleTemplate: "%s | Isaworld",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "/manifest",
      href: "/manifest.json",
    },
  ],
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#F36727",
    },
  ],
  openGraph: {
    type: "website",
    site_name: metadata.title,
    url: "https://isaworld-blog.vercel.app",
    images: [
      {
        url: "https://user-images.githubusercontent.com/57585701/210198765-a6bc65ba-330e-4673-8c6e-cd898623dec4.jpg",
        width: 285,
        height: 167,
        alt: "이미지",
      },
    ],
  },
};