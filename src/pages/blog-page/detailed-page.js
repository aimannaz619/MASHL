import CustomCard from 'src/@core/components/common/custom-card/card'
import { description } from 'src/@core/data/mockData'

const DetailedPage = () => {
  return (
    <div>
      <CustomCard
        title='Experience In The Spotlight'
        subtitle='sub'
        imageSrc='https://listeo.pro/wp-content/uploads/2019/01/sdf-1200x800.jpg'
        cardStyle={{ width: '70%', mb: 7 }}
        cardContentStyle={{ alignItems: 'center', padding: 0 }}
        imageSectionStyle={{
          overflow: 'hidden',
          paddingBottom: 0,
          alignItems: 'center',
          textAlign: 'center',
          mb: 7
        }}
        imageStyle={{ height: '500px', width: '100%' }}
        contentSectionStyle={{ paddingLeft: 2, marginLeft: 5 }}
        description={description}
      ></CustomCard>
    </div>
  )
}

export default DetailedPage
