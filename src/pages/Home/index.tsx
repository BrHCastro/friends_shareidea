import Posts from "../../components/Posts";
import styles from "./Home.module.scss";

import { postsApi } from "../../services/api";
import { useEffect, useState } from "react";

type Posts = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Posts[]> {
  const response: any = await postsApi.get("/posts");

  const result = response.data.map((post: any) => {
    return {
      id: post.id,
      userId: post.userId,
      title: post.title,
      body: post.body,
    };
  });
  return result;
}

export function Home() {
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
    <main className={styles.contentWrapper}>
      {posts.map((post: Posts) => {
        return (
          <Posts
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </main>
  );
}
