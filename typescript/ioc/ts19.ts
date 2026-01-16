import "reflect-metadata";
import { Service, Container, Inject } from "typedi";

  //1. Interface


interface NewsSource {
  fetchArticles(): Promise<string[]>;
}

   //2. Implementations


@Service()
class RSSFeedSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["RSS: Article 1", "RSS: Article 2"];
  }
}

@Service()
class APISource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["API: Article A", "API: Article B"];
  }
}

@Service()
class MockSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["MOCK: Test Article"];
  }
}


   //3. Aggregator


@Service()
class NewsAggregator {
  constructor(
    @Inject(() => RSSFeedSource) private source: NewsSource
  ) {}

  async getLatestArticles() {
    const articles = await this.source.fetchArticles();
    articles.forEach(a => console.log(a));
  }
}

// 4. Run tests with different sources


async function run() {
  console.log("\n--- Using RSS Source ---");
  Container.reset();
  Container.set(RSSFeedSource, new RSSFeedSource());
  const agg1 = Container.get(NewsAggregator);
  await agg1.getLatestArticles();

  console.log("\n--- Using API Source ---");
  Container.reset();
  Container.set(RSSFeedSource, new APISource());
  const agg2 = Container.get(NewsAggregator);
  await agg2.getLatestArticles();

  console.log("\n--- Using Mock Source ---");
  Container.reset();
  Container.set(RSSFeedSource, new MockSource());
  const agg3 = Container.get(NewsAggregator);
  await agg3.getLatestArticles();
}

run();
