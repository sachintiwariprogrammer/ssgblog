import Head from 'next/head'
import BlogCard from '@/components/BlogCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}

export default function Home({posts}) {

  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Developed by Sachin Tiwari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box>
      <Grid container justifyContent="center" rowSpacing={3}>
        <Grid item xs={8}>
           <h1>Latest Blogs</h1>
        </Grid>
        {posts.map((data, index)=>(
          <Grid item xs={8} key={index}>
           <BlogCard data={data}/>
          </Grid>
        ))}
      </Grid>
    </Box>
      </main>
    </>
  )
}
