import { DocumentTypes } from 'contentlayer/generated';
import { useMemo } from 'react';
import { useSearchBarInputAction } from "modules/searchBar/action";

export default function useSearchPost(allPosts: DocumentTypes[]) {
  const { searchInput } = useSearchBarInputAction();

  const getSearchPost = () => {
    if (searchInput !== "") {
      const temp: DocumentTypes[] = allPosts.filter((post) => {
        return new RegExp(searchInput.replace(/ /g, ''), "gim").test(post.title.replace(/ /g, ''))
          || new RegExp(searchInput.replace(/ /g, ''), "gim").test(post.description.replace(/ /g, ''))
          || new RegExp(searchInput.replace(/ /g, ''), "gim").test(post.body.raw.replace(/ /g, ''))
      });
      return temp;
    } else {
      return allPosts;
    }
  }

  const searchPosts = useMemo(() => getSearchPost(), [searchInput]);

  return {
    searchPosts
  }
}
