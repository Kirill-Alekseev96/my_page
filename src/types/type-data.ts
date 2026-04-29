export type ImageType = {
  src: string;
  alt: string;
}


export type PortfolioDataType = {
    id: string;
    title: string;
    description: string;
    previewImage: string;
    images: ImageType[],
    fullDescription: string;
    link: string;
  }