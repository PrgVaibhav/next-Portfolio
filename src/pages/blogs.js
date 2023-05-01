import styles from "../styles/Blogs.module.scss";
import Blog from "../components/Blog";
import Head from "next/head";
import Seo from "../components/Seo";
const Blogs = ({ blogs }) => {
  return (
    <>
      <Seo
        title="Blogs | Vaibhav Kumar"
        description="Blogs by Vaibhav Kumar on Hashnode."
      />

      <div className={styles.blogs_container} id="main">
        <h2>Blogs</h2>
        <p>
          I have recently started writing blogs on Hashnode, here are some of my
          blogs. I will be adding more blogs soon. You can also check out my
          blogs on Hashnode. Here you can see my last 6 blogs.
        </p>
        <p>
          Visit my Hashnode profile{" "}
          <a
            href="https://vaibhavwrites.hashnode.dev/"
            target="_blank"
            aria-label="Read more from my hashnode blog"
          >
            here
          </a>
        </p>
      </div>
      {blogs?.map((blog) => (
        <Blog key={blog.slug} {...blog} />
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `
    {
      user(username: "devXvaibhav"){
          publication{
              posts(page: 0){
                  title,
                  coverImage,
                  brief,
                  slug,
                  dateAdded,
              }
          }
      }
    }  
      `;
  const res = await fetch("https://api.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const APIdata = await res.json();

  return {
    props: {
      blogs: APIdata?.data.user.publication.posts,
    },
  };
};
export default Blogs;
