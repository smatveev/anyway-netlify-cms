import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/bg2.jpg')`,
          }}
        >
          <h1
            className="title is-size-2 is-bold-light"
            style={{
              // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "rgb(0, 0, 0, 0.6)",
              // backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
              margin: "0.5rem",
              lineHeight: "1",
              borderRadius: "1rem",
            }}
          >
            Все публикации
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
