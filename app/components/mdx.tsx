import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  a: CustomLink,
};

export function CustomMDX(props) {
  const MDXContent = MDXRemote({ ...props, components });
  return <>{MDXContent}</>;
}
