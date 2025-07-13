import Hero from '../Components/Hero';
import SectionTitle from '../Components/SectionTitle';
import Card from '../Components/Card';
import accounts from '../../assets/icons/accounts.png'
import idea from '../../assets/icons/creative.png'
import marketing from '../../assets/icons/marketing.png'
import chip from '../../assets/icons/chip.png'
import FeaturedJob from '../Components/JobCard';
import Button from '../Components/Button';
import Jobs from '../Components/JobsItem';

const Home = () => {

 


  return (
    <div className='mx-auto'>
      <Hero></Hero>
      {/* Job Category List */}
      <div className='space-y-3 container mx-auto py-10 '>
        <SectionTitle title='Job Category List' desc='Explore thousands of job opportunities with all the information you need. Its your future'></SectionTitle>

        <div className='flex flex-col lg:flex-row gap-5 justify-between px-2 lg:px-0'>
          <Card img={accounts} title='Account & Finance' desc='300 Jobs Available'></Card>
          <Card img={idea} title='Creative Design' desc='100 Jobs Available'></Card>
          <Card img={marketing} title='Marketing & Sales' desc='150 Jobs Available'></Card>
          <Card img={chip} title='Engineering Job' desc='224 Jobs Available'></Card>
        </div>
      </div>

      {/* Featured Jobs */}
      
      <SectionTitle title='Featured Jobs' desc='Explore thousands of job opportunities with all the information you need. Its your future'>

      </SectionTitle>
      <Jobs></Jobs>
    </div>
  );
};

export default Home;