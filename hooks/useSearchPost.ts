import { Post } from 'contentlayer/generated';
import { useState } from 'react';

export default function useSearchPost(allPosts: Post[]) {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const getSearchPost = () => {
    if (searchTitle !== "") {
      const temp = allPosts.filter((post) => new RegExp(searchTitle, "gim").test(post.title));
      console.log("temp", temp)
      // setSearchPosts(temp); // 이거 왜 안됨...
    } else {
      setSearchPosts([]);
    }
  }

  return {
    searchTitle,
    searchPosts,
    onChangeSearchTitle,
    getSearchPost
  }
}
