type GeneratedMetadataInput = {
  title: string;
  description: string;
  image?: string;
};

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput):
  | (
      | React.DetailedHTMLProps<
          React.MetaHTMLAttributes<HTMLMetaElement>,
          HTMLMetaElement
        >
      | undefined
    )[]
  | undefined {
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "Personal Finances Tools, Expenses Tracker, Incomes Tracker, Subscription Tracker, AI, Money Tracker",
    },
    { name: "creator", content: "nyomansunima" },
    { name: "publisher", content: "nyomansunima" },
    { name: "application-name", content: "Nyoman Sunima" },
    {
      name: "google-site-verification",
      content: "SQvd-mmeO1RUbsqC1I3poFzt9dGmjtrkDHQkzOkk2ns",
    },
    { name: "category", content: "Websites" },
    { name: "generator", content: "Tanstack Start" },
    { name: "pinterest-rich-pin", content: "true" },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764905166082/f13aa8de-a203-4770-ad43-a379259a121c.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },

    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "nyomansunima" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764905166082/f13aa8de-a203-4770-ad43-a379259a121c.png",
    },
  ];
}
