export default {
  name: "homepageDownloadList",
  title: "Homepage Download List",
  type: "document",
  fields: [
    { title: "Text", name: "text", type: "string" },
    { title: "Heading", name: "heading", type: "string" },
    { title: "Kicker", name: "kicker", type: "string" },
    { title: "Subhead", name: "subhead", type: "string" },
    {
      title: "Downloads",
      name: "downloads",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageDownload" }],
        },
      ],
    },
  ],
}
