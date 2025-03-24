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
  // Remove the title property - it's not part of DocsThemeConfig
  project: {
    link: 'https://github.com/demola234/flutter_bunny_cli/',
  },
  docsRepositoryBase: 'https://github.com/demola234/flutter_bunny_cli/docs',
  footer: {
    text: 'Flutter Bunny CLI Docs',
  },
  head: () => ( // Change to a function that returns JSX
    <>
      <link rel="icon" type="image/png" href="/bunny_logo.png" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Flutter Bunny CLI',
      defaultTitle: 'Flutter Bunny CLI - A Flutter Development Tool',
      description: 'A powerful CLI tool for creating and managing Flutter applications with best practices and consistent architecture',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://flutterbunny.xyz/',
        site_name: 'Flutter Bunny CLI',
        title: 'Flutter Bunny CLI - A Flutter Development Tool',
        description: 'A powerful CLI tool for creating and managing Flutter applications with best practices and consistent architecture',
        images: [
          {
            url: 'https://flutterbunny.xyz/bunny_logo.png', // Added missing comma here
            width: 1200,
            height: 630,
            alt: 'Flutter Bunny CLI',
          }
        ],
      },
    }
  },
  // Add other required properties
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config