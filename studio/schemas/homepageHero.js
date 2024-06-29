export default {
  name: "homepageHero",
  title: "Homepage Hero",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Kicker", name: "kicker", type: "string" },
    { title: "Subhead", name: "subhead", type: "string" },
    { title: "Image", name: "image", type: "image" },
    { title: "Background", name: "background", type: "image" },
    { title: "Text", name: "text", type: "string" },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageLink" }],
        },
      ],
    },
    { title: "BSubhead", name: "bsubhead", type: "string" },
    { title: "BText", name: "btext", type: "string" },
    {
      title: "BContent",
      name: "bcontent",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageNextBox" }],
        },
      ],
    },
  ],
}
