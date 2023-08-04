module.exports = {
  collections_config: {
    posts: {
      name:"Posts",
      path:"src/pages/posts",
      parser:"frontmatter",
      output:true,
      url:"src/pages/posts/[id]",
      _enabled_editors: [
        "data",
        "visual"
      ]
    },
  },
};
