import { ArticleApproval } from "./components/ArticleApproval";

function App() {
  const article = {
    title: "Breaking News: Market Hits Record High",
    author: "NewsFleet Editorial Team",
  };

  return (
    <main>
      <h1>NewsFleet Dashboard</h1>
      <ArticleApproval article={article} />
    </main>
  );
}

export default App;
