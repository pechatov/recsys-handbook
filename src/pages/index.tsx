import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const focusAreas = [
  {
    title: 'Алгоритмы',
    text: 'От popularity baseline и kNN до matrix factorization, ranking, sequential и neural approaches.',
  },
  {
    title: 'Оценка качества',
    text: 'Offline metrics, A/B tests, counterfactual evaluation, bias и связь метрик с пользовательским опытом.',
  },
  {
    title: 'Production',
    text: 'Candidate generation, retrieval, reranking, latency, мониторинг, freshness и эксплуатационные компромиссы.',
  },
];

function HomepageHeader(): ReactNode {
  const diagramSrc = useBaseUrl('/img/recsys-pipeline.svg');

  return (
    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>Открытый учебник</p>
        <Heading as="h1" className={styles.title}>
          RecSys Handbook
        </Heading>
        <p className={styles.subtitle}>
          Русскоязычный учебник по рекомендательным системам: теория, инженерная
          практика и воспроизводимые примеры в одном статическом сайте.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Открыть учебник
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/development/tech-stack"
          >
            Технологии
          </Link>
        </div>
      </div>
      <figure className={styles.diagram}>
        <img src={diagramSrc} alt="Схема пайплайна рекомендательной системы" />
      </figure>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="RecSys Handbook"
      description="Открытый учебник по рекомендательным системам"
    >
      <main className={styles.main}>
        <HomepageHeader />

        <section className={styles.section} aria-labelledby="focus-heading">
          <div className={styles.sectionHeader}>
            <Heading as="h2" id="focus-heading">
              Что будет внутри
            </Heading>
            <p>
              База для курса закладывается вокруг трех одинаково важных
              направлений: модели, измерение качества и эксплуатация систем.
            </p>
          </div>
          <div className={styles.grid}>
            {focusAreas.map((area) => (
              <article className={styles.card} key={area.title}>
                <Heading as="h3">{area.title}</Heading>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
