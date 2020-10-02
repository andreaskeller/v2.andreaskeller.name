import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import getAllPostPreviews from "@/getAllPostPreviews";
import twitterCard from "@/img/twitter-card.png";

const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{MMMM} {DD}, {YYYY}");

export default function Blog() {
  return (
    <div className="relative max-w-lg mx-auto lg:max-w-7xl">
      <div className="grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@itsakeller" />
          <meta name="twitter:creator" content="@itsakeller" />
          <meta name="twitter:title" content="Andreas Keller" />
          <meta
            name="twitter:description"
            content="I write about building modern websites with Next.js"
          />
          <meta name="twitter:image" content={`https://andreaskeller.name${twitterCard}`} />
          <meta property="og:url" content="https://andreaskeller.name" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Blog – Andreas Keller" />
          <meta property="og:description" content="" />
          <meta property="og:image" content={`https://andreaskeller.name${twitterCard}`} />
          <title>Blog – Andreas Keller</title>
          <meta name="description" content="" />
        </Head>
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <div>
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-sm leading-5 text-gray-500">
                  <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
                </dd>
              </dl>
              <Link href={link}>
                <a className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    <Link href={link}>
                      <a className="text-gray-900">{meta.title}</a>
                    </Link>
                  </h3>
                  <p className="prose mt-3 text-base leading-6 text-gray-500">
                    <Component />
                  </p>
                </a>
              </Link>
              <div className="mt-3 text-base leading-6 font-medium">
                <Link href={link}>
                  <a
                    className="bg-blue-50 hover:bg-blue-200 border-blue-400 border-b-2"
                    aria-label={`Read "${meta.title}"`}
                  >
                    Read more &rarr;
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
