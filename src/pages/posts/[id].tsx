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
      <h1>title : {post.title}</h1>
      <p>body : {post.body}</p>
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
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}
