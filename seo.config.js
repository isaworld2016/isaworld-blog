import metadata from "data/metadata";

export default {
  titleTemplate: "%s | Isaworld",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
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
    images: [{ url: "https://example.com/example_square_image.png" }],
  },
};