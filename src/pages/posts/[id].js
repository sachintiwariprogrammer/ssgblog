import Head from 'next/head'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


const baseUrl = 'https://jsonplaceholder.typicode.com'
export default function BlogCard({post}) {


  return (
    <>
      <Head>
            <title>{post.title?post.title:""}</title>
            <meta name="description" content="Developed by Sachin Tiwari" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Box>
                <Grid container justifyContent="center" rowSpacing={3}>
                    <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            {post.title && 
                                <Typography gutterBottom variant="h5" component="div">{post.title}</Typography>
                            }
                            {post.body && 
                                <Typography gutterBottom variant="p" component="div">{post.body}</Typography>
                            }
                        </CardContent>
                        <CardActions>
                            <Link href="/"><Button size="small">Homepage</Button></Link>
                        </CardActions>
                    </Card>
                    </Grid>
                </Grid>
            </Box>
        </main>
    
    </>
  );
}

export const getStaticPaths = async () => {
    const res = await fetch(`${baseUrl}/posts`)
    const posts = await res.json()
  
    const paths = posts.map((post) => ({
      params: { id: `${post.id}` },
    }))
  
    return { paths, fallback: false }
  }
  
  
  export const getStaticProps = async ({ params }) => {
    const res = await fetch(`${baseUrl}/posts/${params.id}`)
    const post = await res.json()
  
    return { props: { post } }
  }