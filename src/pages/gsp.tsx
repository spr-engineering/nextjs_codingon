import { GetStaticProps } from 'next'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface Props {
  posts: Post[]
}

const GSP = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <div key={`${post.id}`}>
          <h1>title : {post.title}</h1>
          <p>body : {post.body}</p>
        </div>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: { posts },
  }
}

export default GSP
