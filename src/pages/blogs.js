import styles from "../styles/Blogs.module.css";
import Blog from "../components/Blog";
import Head from "next/head";
const Blogs = ({ blogs }) => {
  return (
    <>
      <Head lang="en">
        <title>Blogs | Vaibhav Kumar</title>
        <meta name="title" content="Blog Page" />
        <meta name="description" content="Blog page of Vaibhav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio website of Vaibhav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Blog Page" />
        <meta
          property="og:description"
          content="Portfolio website of Vaibhav Kumar"
        />
        <meta property="og:url" content="https://vaibhavkumar.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vaibhav Kumar" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
