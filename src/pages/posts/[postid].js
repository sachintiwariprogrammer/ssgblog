import Head from 'next/head'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function BlogCard({blogData}) {


  return (
    <>
      <Head>
            <title>{blogData.title?blogData.title:""}</title>
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
                            {blogData.title && 
                                <Typography gutterBottom variant="h5" component="div">{blogData.title}</Typography>
                            }
                            {blogData.body && 
                                <Typography gutterBottom variant="p" component="div">{blogData.body}</Typography>
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

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
    const data = await res.json();
    return {
      props: {
        blogData: data,
      },
    };
}