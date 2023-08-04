module.exports = {
  paths: {
      collections: 'content',
      data: 'data',
      static: 'public',
      uploads: 'public/uploads'
  },
  collections_config: {
    posts: {
      name:"Posts",
      path:"content/posts",
      parser:"frontmatter",
      output:true,
      url:"src/pages/posts/[id]",
      _enabled_editors: [
        "data",
        "visual"
      ],
      schemas: {
        default: {
            path: 'schemas/post.md'
        }
      }
    },
  },
};
