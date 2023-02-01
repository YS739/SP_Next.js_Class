import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Post: {id}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
