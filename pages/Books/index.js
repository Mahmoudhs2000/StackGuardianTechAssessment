import { Container,Grid, Card, CardMedia, CardContent, Button,CardActions } from '@material-ui/core'
import Head from 'next/head'
import Delete from '@material-ui/icons/Delete'
import { useState, useEffect } from 'react'
import { getBooks } from '../../utils/getBooks'
import styles from '../../styles/Library.module.css';
import Link from 'next/link'

export default function Books() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    const data = getBooks();
    setBooks(data);
  }, [])

  const deleteBook = (id)=>{
    const filtered = Books.filter((b)=> b.id !== id );
    console.log(filtered);
    setBooks(filtered);
  }

  return (
    <div >
      <Head>
        <title>Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container className={styles.container} >
            <Grid container className={styles.grid} spacing={2}  >
                {
                 Books.length && Books.map((bk)=> (
                    <Grid item key={bk.id} md={3} className={styles.item} >
                       <Card>
                         <CardMedia 
                            component='img'
                            image={bk.image}
                            height={'150'}
                         />
                         <CardContent>
                           <h5>{bk.name}</h5>
                         </CardContent>
                         <CardActions>
                            <Button size='small' color='secondary' variant='outlined' onClick={()=>{deleteBook(bk.id)}} >
                              <Delete />
                            </Button>
                            <Button size='small' color='primary' variant='outlined' >
                               <Link href={`/Books/${bk.id}`} >Details</Link>
                            </Button>
                         </CardActions>
                       </Card>
                    </Grid>
                  ))
                }
            </Grid>
        </Container>
      </main>

    </div>
  )
}