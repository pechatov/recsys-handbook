import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handbookSidebar: [
    'intro',
    'program',
    {
      type: 'category',
      label: '1. Введение и метрики',
      collapsed: true,
      items: ['foundations/intro-and-product', 'foundations/metrics-and-evaluation'],
    },
    {
      type: 'category',
      label: '2. Архитектура и данные',
      collapsed: true,
      items: ['architecture/multistage-pipeline', 'architecture/data-and-features'],
    },
    {
      type: 'category',
      label: '3. Кандидатогенерация',
      collapsed: true,
      items: [
        'candidate-generation/baselines-and-matrix-models',
        'candidate-generation/two-tower-and-ann',
        'candidate-generation/sequential-and-content',
        'candidate-generation/graph-and-rl',
        'candidate-generation/generative-and-llm',
      ],
    },
    {
      type: 'category',
      label: '4. Ранжирование',
      collapsed: true,
      items: ['ranking/gbdt-ranking', 'ranking/neural-and-multitask-ranking'],
    },
    {
      type: 'category',
      label: '5. Реранжирование',
      collapsed: true,
      items: ['reranking/reranking'],
    },
    {
      type: 'category',
      label: '6. Деплой и тесты',
      collapsed: true,
      items: ['deployment/system-lifecycle', 'deployment/ab-testing'],
    },
    {
      type: 'category',
      label: 'Разработка проекта',
      collapsed: true,
      items: ['development/tech-stack', 'development/content-format'],
    },
  ],
};

export default sidebars;
