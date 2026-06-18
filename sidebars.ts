import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handbookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Разработка проекта',
      collapsed: false,
      items: ['development/tech-stack', 'development/content-format'],
    },
  ],
};

export default sidebars;
