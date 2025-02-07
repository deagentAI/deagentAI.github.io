import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Consensus Mechanism',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <h4 className='text--left'>DeAgent ensures consensus through</h4>
        <ul>
          <li className='text--left'>
            <strong>Entropy-based decision selection:</strong>
            Selecting the lowest-entropy output from candidate AI responses to minimize ambiguity.
          </li>
          <li className='text--left'>
            <strong>Zero-knowledge proofs (zk):</strong>
            Validating model calls (e.g., via zkTLS for API interactions) and non-model logic to guarantee correctness
          </li>
          <li className='text--left'>
            <strong>Hybrid active/PoW schemes:</strong> For open-source models, using a network of nodes to compute results and selecting the lowest-entropy outcome.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Identity Uniqueness',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      <h4 className='text--left'>Each DeAgent inherits the distributed system’s uniqueness properties (e.g., immutability of on-chain data), ensuring:</h4>
      <ul>
        <li className='text--left'>Only one valid interaction outcome exists at any time.</li>
        <li className='text--left'>Conflicting actions (e.g., simultaneous contradictory decisions) are prevented, akin to a blockchain's linear chain design.</li>
      </ul>
      </>
    ),
  },
  {
    title: 'Governance Capabilities',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <h4 className='text--left'>DeAgent enables governance through</h4>
      <ul>
        <li className='text--left'>
          <strong>Decision plugins:</strong>
          Allowing agents to propose, simulate, and execute decisions (e.g., on-chain transactions) with approval/rejection mechanisms.
        </li>
        <li className='text--left'>
          <strong>Memory and tool integration:</strong>
          Leveraging memory (hot/long-term) and tools (e.g., distributed data queries, internet access) to support informed, context-aware governance.
        </li>
        <li className='text--left'>
          <strong>DAO frameworks:</strong>
          Supporting multi-agent governance, where agents can vote on proposals and coordinate actions within decentralized systems.
        </li>
      </ul>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
