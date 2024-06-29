export default {
  name: "whatPage",
  title: "What Page",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Description", name: "description", type: "string" },
    { title: "Image", name: "image", type: "image" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "whatHero" },
            { type: "whatStatList" },
            { type: "homepageProductList" },
            { type: "whatLeadership" },
            { type: "homepageBenefitList" },
            { type: "whatLogoList" },
            { type: "homepageCta" },
          ],
        },
      ],
    },
  ],
}
