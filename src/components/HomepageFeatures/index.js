import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Whizard',
    Svg: require('@site/static/img/WhizardTelemetry.svg').default,
    description: (
      <>
        Whizard is a Prometheus Long-Term Storage powered by Thanos.
      </>
    ),
  },
  {
    title: 'eBPFConductor',
    Svg: require('@site/static/img/WhizardTelemetry.svg').default,
    description: (
      <>
        eBPFConductor is a Rust-based framework designed for the efficient management of eBPF programs in Kubernetes environments. 
        <br></br>
        Preparing for open-source release
      </>
    ),
  },
  {
    title: 'More to come',
    Svg: require('@site/static/img/WhizardTelemetry.svg').default,
    description: (
      <>
        We are working on more projects to help you with your observability needs. Stay tuned!
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
