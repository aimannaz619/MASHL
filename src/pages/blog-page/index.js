import CustomCard from 'src/@core/components/common/custom-card/card'
import { dummyData } from 'src/@core/data/mockData'

const BlogPage = () => {
  return (
    <div>
      {dummyData.map(item => (
        <CustomCard
          title={item.title}
          subtitle={item.subtitle}
        
          avatarIcon='tabler:star'
          imageSrc={item.imgSrc}
          rating={item.rating}
          cardStyle={{ width: '70%', mb: 7 }}
          cardContentStyle={{ display: 'flex', alignItems: 'center', padding: 0 }}
          imageStyle={{ maxWidth: '100%' }}
          imageSectionStyle={{
            flex: '1 1 33%',
            display: 'flex',
            overflow: 'hidden',
            paddingBottom: 0
          }}
          contentSectionStyle={{ flex: '2 1 67%', paddingLeft: 2, marginLeft: 5 }}
        ></CustomCard>
      ))}
    </div>
  )
}

export default BlogPage
