import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'


const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center">
      <Image
        src="/bunny_logo.png"
        alt="logo"
        width={40}
        height={40}
      />
    </div>
  ),
  project: {
    link: 'https://github.com/demola234/flutter_bunny_cli/',
  },
  docsRepositoryBase: 'https://github.com/demola234/flutter_bunny_cli/docs',
  footer: {
    text: 'Flutter Bunny CLI Docs',
  },
  head: (
    <>
      <link rel="icon" type="image/png" href="/bunny_logo.png" />
    </>
  ),
//   head: (
//       <>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
//         <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="description" content="Flutter Bunny CLI Documentation" />
//       </>
//     ),
}

export default config