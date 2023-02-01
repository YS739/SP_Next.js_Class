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

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(`http://localhost:3001/posts/${id}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
