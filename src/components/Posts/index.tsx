import styles from "./Posts.module.scss";

import UserAvatar from "../../assets/user_min.png";
import Comments from "../Comments";
import { postsApi } from "../../services/api";
import { useEffect, useState } from "react";

type Posts = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type Comments = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

async function getComments(): Promise<Comments[]> {
  const response: any = await postsApi.get("/comments");

  const result = response.data.map((post: any) => {
    return {
      postId: post.postId,
      id: post.id,
      name: post.name,
      email: post.email,
      body: post.body,
    };
  });
  return result;
}

export default function Posts(props: Posts) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const arr: any = [];
    getComments().then((comments) => {
      comments.map((comment) => {
        arr.push(comment);
      });

      setComments(arr);
    });
  }, []);

  return (
    <>
      <div className={styles.cardPrincipal}>
        <div className={styles.userAvatar}>
          <span className={styles.userValue}>{props.userId}</span>
          <img src={UserAvatar} alt="Avatar do usuário" />
        </div>
        <div className={styles.contentInfo}>
          <h1>{props.title}</h1>
          <hr />
          <span>{props.body}</span>

          {comments.map((comment: Comments) => {
            if (comment.postId === props.id) {
              return (
                <Comments
                  key={comment.id}
                  postId={comment.postId}
                  id={comment.id}
                  name={comment.name}
                  email={comment.email}
                  body={comment.body}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
