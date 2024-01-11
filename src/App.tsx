import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

// matheuscarlosf

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/matheuscarlosf.png",
      name: "Matheus Carlos",
      role: "UI Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "trzin.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-04 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/eomgn.png",
      name: "	Matheus G. Nogueira",
      role: "Developer Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "eomgn.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-02 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
