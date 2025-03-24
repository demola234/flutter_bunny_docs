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
}

export default config