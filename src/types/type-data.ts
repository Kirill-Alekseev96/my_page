// export type ProjectsDataType = [ 
//     {
//         id: string;
//         title?: string;
//         description?: string;
//         images?: string[];
//     }
// ]

export type PortfolioDataType = {
    id: string;
    title: string;
    description: string;
    previewImage: string;
    images: [
      { 
        src: string;
        alt: string;
      },
      { 
        src: string;
        alt: string;
      },
      { 
        src: string;
        alt: string;
      }
    ]
  }