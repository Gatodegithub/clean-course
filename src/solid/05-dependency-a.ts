import { PostService } from "./05-dependency-b";
import { JsonDataBaseService, LocalDataBaseService, HttpClient, WebApiPostService } from './05-dependency-c';

// Main
(async () => {

  // const provider = new JsonDataBaseService();
  // const provider = new LocalDataBaseService();
  const provider = new WebApiPostService(new HttpClient());

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
