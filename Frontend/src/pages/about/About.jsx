import { Box, Grid2, Paper } from '@mui/material'
import React from 'react'

import Sanjeev from '../../image/review/1.jpg'
const About = () => {
  return (
    <>
      <Box component={Paper} >

        <Grid2 container spacing={2} padding={2} >
          <Grid2 size={{ xs: 12 }} sx={{ background: 'rgb(72, 232, 192)', borderRadius: '10px' }} p={2} >
            <h1 style={{ color: 'rgb(35, 34, 77)' }} >The Haat </h1>

          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }} sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <img src={Sanjeev} alt="" style={{ width: '100%', height: '300px', borderRadius: '10px' }} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 10 }} >
            <h1 style={{ color: 'rgb(101, 103, 101)', marginBottom: '20px' }} >Founder of The Haat </h1>
            <h3 style={{ color: 'rgb(23, 23, 72)', marginBottom: '20px' }} >Sanjeev Kumar</h3>
            <p>Lorsciunt at cumque magni deserunt rem delectus a. Aliquam nam numquam, in alias minima quae, perferendis amet harum praesentium, mollitia enim optio iure. Nihil ratione sed aperiam!
              Nobis, debitis nostrum. Recusandae modi earum necessitatibus illum, totam ut laudantium, natus cumque impedit ad nam nemo eveniet in? Iusto suscipit ab a excepturi dolores ad veniam quis, id ex.
              Delectus laborum dolores, aspernatur fugit quam illo voluptatibus? Inventore eum laudantium illum, corporis dolor neque veritatis quidem, facere exercitationem harum aperiam quibusdam assumenda nemo!</p>
          </Grid2>

        </Grid2>
        <Grid2 container spacing={2} padding={2} >

          <Grid2 size={{ xs: 12, md: 10 }} >
            <h1 style={{ color: 'rgb(101, 103, 101)', marginBottom: '20px' }} >Co-Founder of The Haat </h1>
            <h3 style={{ color: 'rgb(23, 23, 72)', marginBottom: '20px' }} >Sanjeev Future Wife</h3>
            <p>Lorsciunt at cumque magni deserunt rem delectus a. Aliquam nam numquam, in alias minima quae, perferendis amet harum praesentium, mollitia enim optio iure. Nihil ratione sed aperiam!
              Nobis, debitis nostrum. Recusandae modi earum necessitatibus illum, totam ut laudantium, natus cumque impedit ad nam nemo eveniet in? Iusto suscipit ab a excepturi dolores ad veniam quis, id ex.
              Delectus laborum dolores, aspernatur fugit quam illo voluptatibus? Inventore eum laudantium illum, corporis dolor neque veritatis quidem, facere exercitationem harum aperiam quibusdam assumenda nemo!</p>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }} sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <img src={null}  alt="Photo Visible after married" style={{ width: '100%', height: '300px', border: '1px solid', borderRadius: '10px', textAlign: 'center', lineHeight: '300px' }} />
          </Grid2>

        </Grid2>

      </Box>

    </>
  )
}

export default About