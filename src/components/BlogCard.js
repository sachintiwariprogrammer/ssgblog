import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

export default function BlogCard({data}) {
  return (
    <Card>
      <CardContent>
        {data.title && 
            <Typography gutterBottom variant="h5" component="div">{data.title}</Typography>
        }
      </CardContent>
      <CardActions>
        <Link href={`${data.id}`}><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}