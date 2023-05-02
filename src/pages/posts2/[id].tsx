import { GetStaticPaths, GetStaticProps } from 'next'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface Props {
  post: Post
}

export default function GSP({ post }: Props) {
  return (
    <>
      <div key={`${post.id}`}>
        <h1>title : {post.title}</h1>
        <p>body : {post.body}</p>
        {/* <p>id : {post.id}</p> */}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  let id = context.params?.id ?? '0'
  if (Array.isArray(id)) {
    id = id[0]
  }
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}
