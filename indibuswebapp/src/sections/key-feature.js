import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column.js';
import Performance from '../assets/key-feature/performance.svg';
import Partnership from '../assets/key-feature/partnership.svg';
import Subscription from '../assets/key-feature/subscription.svg';
import Support from '../assets/key-feature/support.svg';

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

export default function KeyFeature() {
  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          title="Support and Services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
