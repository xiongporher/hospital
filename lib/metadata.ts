import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://phongsavanh-hospital.com";

export function generateArticleMetadata(article: {
  title: string;
  description: string;
  image?: string;
  id: string;
}): Metadata {
  const url = `${baseUrl}/articles/${article.id}`;
  const imageUrl = article.image || `${baseUrl}/images/og-image.jpg`;

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
  };
}

export function generatePackageMetadata(pkg: {
  title: string;
  description: string;
  image?: string;
  id: string;
}): Metadata {
  const url = `${baseUrl}/packages/${pkg.id}`;
  const imageUrl = pkg.image || `${baseUrl}/images/og-image.jpg`;

  return {
    title: pkg.title,
    description: pkg.description,
    openGraph: {
      title: pkg.title,
      description: pkg.description,
      url,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pkg.title,
      description: pkg.description,
      images: [imageUrl],
    },
  };
}
