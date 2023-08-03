module.exports = {
  collections_config: {
    posts: {
      path: '_posts',
      parser: 'front-matter',
      url: (filePath, parsed, { filters }) => {
        const year = new Date(parsed.date).getFullYear();
        const slug = filters.slugify(parsed.title || '');
        return `/posts/${id}/`;
      },
      output: true
    },
  },
};
