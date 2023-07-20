module.exports = function(eleventyConfig) {
    // Output directory: _site

    // Copy `style.css` to `_site/`
    eleventyConfig.addPassthroughCopy("*/src/styles.css");
    eleventyConfig.addPassthroughCopy("*/src/main.js");

    return {
      dir: { input: 'src', output: '_site' }
    };
};