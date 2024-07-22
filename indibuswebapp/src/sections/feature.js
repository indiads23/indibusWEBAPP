import { Container, Grid, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from '../components/feature-card.js';
import Performance from '../assets/feature/performance.svg';
import Partnership from '../assets/feature/partnership.svg';
import Subscription from '../assets/feature/subscription.svg';
import Support from '../assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Technical Support',
    title: 'Technical Support',
    text:
      'Enhance the technical aspects of your startup with our experienced tech team.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Marketing Support',
    title: 'Marketing Support',
    text:
      'Take your brand to new heights with our advertising and marketing support',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'IT Consultancy',
    title: 'IT Consultancy',
    text:
      'Grow your information technology services with our specialized IT Support team',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Internship Oppotunities',
    title: 'Internship Opportunities',
    text:
      'Get internship opportunities in INDIBUS and partner companies',
  },
];

export default function Feature() {
  return (
    <Box sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
