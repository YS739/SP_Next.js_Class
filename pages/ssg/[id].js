import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Post: {router.asPath}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],
    fallback: true,
  };
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    `https://ten-desert-frigate.glitch.me/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}
