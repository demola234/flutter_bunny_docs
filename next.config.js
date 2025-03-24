// Use this format for Nextra 2.x
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

// Export a configuration object
module.exports = {
  ...withNextra(),
  // Add any other Next.js config options here
}