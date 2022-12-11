export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "639609b2e5a7ff324cab4d8d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-rthrebx5",
                  apiId: "b9cdcda1-e45c-4fe0-8488-232c7e49b59d",
                },
                {
                  buildHookId: "639609b3f86b312d59f416fb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-iqddgos2",
                  apiId: "5ab68eb1-abdd-45fc-b5aa-bedcc1612fea",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/trandromeda/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-iqddgos2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
