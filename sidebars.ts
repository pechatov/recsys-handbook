import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handbookSidebar: [
    'intro',
    'program',
    {
      type: 'category',
      label: '1. Введение и метрики',
      collapsed: true,
      items: [
        'foundations/intro-to-recsys',
        'foundations/business-metrics',
        'foundations/offline-metrics',
        'foundations/evaluation-protocols',
      ],
    },
    {
      type: 'category',
      label: '2. Архитектура систем',
      collapsed: true,
      items: [
        'architecture/multistage-pipeline',
        'architecture/data-and-features',
        'architecture/system-lifecycle',
      ],
    },
    {
      type: 'category',
      label: '3. Кандидатогенерация',
      collapsed: true,
      items: [
        'candidate-generation/heuristics',
        'candidate-generation/collaborative-filtering',
        'candidate-generation/two-tower',
        'candidate-generation/sequential-models',
        'candidate-generation/ann-search',
        'candidate-generation/content-and-graph',
      ],
    },
    {
      type: 'category',
      label: '4. Ранжирование',
      collapsed: true,
      items: [
        'ranking/ltr-basics',
        'ranking/gbdt-ranking',
        'ranking/neural-ranking',
        'ranking/multitask-and-value',
      ],
    },
    {
      type: 'category',
      label: '5. Реранкинг',
      collapsed: true,
      items: [
        'reranking/rules-and-constraints',
        'reranking/diversity',
        'reranking/listwise-reranking',
        'reranking/exploration',
      ],
    },
    {
      type: 'category',
      label: '6. Деплой и тесты',
      collapsed: true,
      items: [
        'deployment/serving',
        'deployment/training-pipelines',
        'deployment/ab-testing',
        'deployment/testing',
      ],
    },
    {
      type: 'category',
      label: '7. Проблемы и решения',
      collapsed: true,
      items: [
        'challenges/cold-start',
        'challenges/biases-and-debiasing',
        'challenges/feedback-loops',
        'challenges/fairness-and-transparency',
      ],
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
