import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explore My Work',
    image: require('@site/static/img/mountain.jpg').default,
    description: (
      <>
        Check out my projects, my research, and my experience
      </>
    ),
  },
   {
    title: 'Learn About My Personal Interests',
    image: require('@site/static/img/portrait.jpg').default,
    description: (
      <>
        When I'm not working, I like to be by the water, trying new wine and craft beer, cooking a new recipe, or hiking a mountain
      </>
    ),
  },
  {
    title: 'Read My Blog',
    image: require('@site/static/img/surf.jpg').default,
    description: (
      <>
        I will talk about any sort of topics here, but mainly fine wine and software design
      </>
    ),
  },

];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt={title} /> {/* Use the image prop */}
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
