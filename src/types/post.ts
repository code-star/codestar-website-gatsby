import { MdxFieldsFragment } from "./graphqlTypes";

interface Post extends MdxFieldsFragment {
  image: string;
  imageText: string;
  title: string;
  linkText: string;
  date: string;
  description: string;
}

export default Post;
