import React from 'react'
import Container from '../../components/Container/Container'

const Blogs = () => {
  return (
    <Container className='py-20'>
      <h1 className='text-3xl font-bold text-center'>Blogs</h1>

      <div  className='grid grid-cols-1 gap-5 prose max-w-full'>
        <div>
          <h2>Difference between javascript and nodejs</h2>
          <p>Javascript is a programming language and Nodejs is a Javascript runtime environment. We can use javascript code to
            make Applications of nodejs. Nodejs is not a programming language, It uses javascript. Normally using javascript we can't 
            make sever side applications, it only runs on browser. But when we use nodejs we can make server side applications by writing javsscript. 
          </p>
        </div>

        <div>
          <h2>When should you use nodejs and when should you use mongodb?</h2>
          <p>
            We should use nodejs when we want to create a server side application, like an API, Web Application etc. 
            And we should use mongodb when we want to store data of our application in a database. Mongodb is a nosql database that we can
            use with our nodejs application to make it dynamic.
          </p>
        </div>

        <div>
          <h2>Differences between sql and nosql databases.</h2>
          <p>
            In a sql database we need to define a database schema and then we need to write queries to create, read, update or delete data from our database.
            In a nosql database we dont need to define schema, and no need to write any kind of query to create, read, update or delete data from our database. Rather
            we can use a library to execute those operations. 
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Blogs