import { Post } from 'contentlayer/generated';
import { useMemo, useState } from 'react';

export default function useSearchPost(allPosts: Post[]) {
  const [searchTitle, setSearchTitle] = useState("");

  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const clearSearchInput = () => setSearchTitle("");

  const getSearchPost = () => {
    if (searchTitle !== "") {
      const temp: Post[] = allPosts.filter((post) => {
        return new RegExp(searchTitle.replace(/ /g, ''), "gim").test(post.title.replace(/ /g, ''))
          || new RegExp(searchTitle.replace(/ /g, ''), "gim").test(post.description.replace(/ /g, ''))
          || new RegExp(searchTitle.replace(/ /g, ''), "gim").test(post.body.raw.replace(/ /g, ''))
      });
      return temp;
    } else {
      return allPosts;
    }
  }

  const searchPosts = useMemo(() => getSearchPost(), [searchTitle]);

  return {
    searchTitle,
    searchPosts,
    onChangeSearchTitle,
    getSearchPost,
    clearSearchInput
  }
}
