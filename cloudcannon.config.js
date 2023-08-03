module.export = {
    collections_config:{
        posts:{
            name: "Posts",
            path: "src/pages/posts",
            parser: "frontmatter",
            output: true,
            url:"/posts/[postid]"
        }
    }
}