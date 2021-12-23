import styles from "./SideBar.module.scss";

import ChatImg from "../../assets/chat_img.png";
import { postsApi } from "../../services/api";
import { useEffect, useState } from "react";

type Posts = {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments: number;
};

async function getPosts(): Promise<Posts[]> {
  const response: any = await postsApi.get("/posts");
  const results = [];
  const max = 6;

  for (let i = 0; i < max; i++) {
    const aleatorio = Math.floor(Math.random() * response.data.length);
    results.push(response.data[aleatorio]);
  }

  for (let result of results) {
    const comments: any = await postsApi.get("/comments");

    const commentsLength = comments.data.filter((comment: any) => {
      return comment.postId === result.id;
    });

    result.comments = commentsLength.length;
  }

  return results;
}

export function SideBar() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const arr: any = [];

    getPosts().then((posts) => {
      posts.map((post) => {
        arr.push(post);
      });

      setPosts(arr);
    });
  }, []);

  return (
    <section className={styles.contentWrapper}>
      <div className={styles.sideBarTitle}>
        <strong>Posts Recomendados</strong>
      </div>

      {posts.map((post: Posts) => {
        return (
          <div key={post.id} className={styles.sideBarComments}>
            <h3>{post.title.substring(0, 14)}</h3>
            <img src={ChatImg} alt="Icone de Chat" />
            <span>{post.comments} comentários</span>
          </div>
        );
      })}
    </section>
  );
}
