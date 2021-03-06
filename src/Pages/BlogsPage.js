import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import blogs from "../data/blogs";
import { MainLayout, InnerLayout } from "../styles/Layouts";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                key={blog.id}
                className={"blog-item"}
              >
                <div className="image">
                  <img src={blog.image} alt={blog.alt} />
                </div>
                <small className="creation-date">{blog.creation_date}</small>
                <div className="title">{blog.title}</div>
              </a>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }
    .title {
      font-size: 1.5rem;
      color: var(--white-color);
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        color: var(--primary-color);
      }
    }
    .creation-date {
      font-size: 0.8rem;
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default BlogsPage;
