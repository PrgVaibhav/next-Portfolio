import styles from "../styles/Blog.module.scss";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";
const Blog = ({ title, coverImage, brief, slug, dateAdded }) => {
  return (
    <div className={styles.blog_container}>
      <div className={styles.blog}>
        <div className={styles.blog_image}>
          <Image
            src={coverImage}
            alt={title}
            priority
            sizes="(max-width: 100%) 100%, 100%"
            width={100}
            height={100}
            aria-label={title}
            style={{ height: "auto", width: "100%" }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAA"
          />
        </div>
        <div className={styles.blog_content}>
          <h3>{title}</h3>
          <p>{brief}</p>
          <a
            href={`https://vaibhavwrites.hashnode.dev/${slug}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Read More"
          >
            Read More <CgArrowTopRight className={styles.arrow} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
