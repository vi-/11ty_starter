// Some custom config
module.exports = ( config ) => {
  let env = process.env.ELEVENTY_ENV;

  config.addLayoutAlias('default', 'layouts/base.pug');
  config.addLayoutAlias('post', 'layouts/post.pug');

  config.addPassthroughCopy('assets');
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: `_data/${env}`
    },
    templateFormats : ["pug", "md", "css"],
    passthroughFileCopy: true
  }
}