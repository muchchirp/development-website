export default {
  name: "whatStatList",
  title: "What Stat List",
  type: "document",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "whatStat" }],
        },
      ],
    },
  ],
}
