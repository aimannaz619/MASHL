// ** MUI Imports
import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

const CustomCard = props => {
  // ** Props
  const {
    stats,
    title,
    subtitle,
    imageSrc,
    rating,
    cardStyle,
    cardContentStyle,
    imageSectionStyle,
    imageStyle,
    contentSectionStyle,
    description
  } = props

  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        {/* Image Section */}
        <Box sx={imageSectionStyle}>
          <img src={imageSrc} alt={title} style={imageStyle} />
        </Box>

        {/* Content Section */}
        <Box sx={contentSectionStyle}>
          <Typography variant='h5' sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant='body2' sx={{ mb: 1, color: 'text.disabled' }}>
            {subtitle}
          </Typography>
          <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{stats}</Typography>
          {rating && <Rating value={rating} readOnly sx={{ mb: 1.5 }} />}
          <Typography variant='body2' sx={{ mb: 1, color: 'text.disabled' }}>
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CustomCard
