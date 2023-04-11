import styles from "../styles/Blogs.module.css";
import Blog from "../components/Blog";
import Head from "next/head";
const Blogs = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blogs | Vaibhav Kumar</title>
        <meta name="description" content="Blogs page for Vaibhav" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.blogs_container}>
        <h2>Blogs</h2>
        <p>
          I have recently started writing blogs on Hashnode, here are some of my
          blogs. I will be adding more blogs soon. You can also check out my
          blogs on Hashnode. Here you can see my last 5 blogs.
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

export const getStaticProps = async () => {
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
