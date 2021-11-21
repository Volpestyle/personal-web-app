/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
      id
      url
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
      id
      url
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
      id
      url
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
      id
      tag
      title
      content {
        ... on PortfolioItem {
          id
          title
          headingImage {
            id
            url
            description
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
        ... on BulletItem {
          id
          items {
            id
            type
            data
            isLink
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        ... on ContentItem {
          id
          type
          data
          isLink
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
      id
      tag
      title
      content {
        ... on PortfolioItem {
          id
          title
          headingImage {
            id
            url
            description
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
        ... on BulletItem {
          id
          items {
            id
            type
            data
            isLink
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        ... on ContentItem {
          id
          type
          data
          isLink
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
      id
      tag
      title
      content {
        ... on PortfolioItem {
          id
          title
          headingImage {
            id
            url
            description
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
        ... on BulletItem {
          id
          items {
            id
            type
            data
            isLink
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        ... on ContentItem {
          id
          type
          data
          isLink
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePortfolioItem = /* GraphQL */ `
  subscription OnCreatePortfolioItem {
    onCreatePortfolioItem {
      id
      title
      headingImage {
        id
        url
        description
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePortfolioItem = /* GraphQL */ `
  subscription OnUpdatePortfolioItem {
    onUpdatePortfolioItem {
      id
      title
      headingImage {
        id
        url
        description
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePortfolioItem = /* GraphQL */ `
  subscription OnDeletePortfolioItem {
    onDeletePortfolioItem {
      id
      title
      headingImage {
        id
        url
        description
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContentItem = /* GraphQL */ `
  subscription OnCreateContentItem {
    onCreateContentItem {
      id
      type
      data
      isLink
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContentItem = /* GraphQL */ `
  subscription OnUpdateContentItem {
    onUpdateContentItem {
      id
      type
      data
      isLink
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContentItem = /* GraphQL */ `
  subscription OnDeleteContentItem {
    onDeleteContentItem {
      id
      type
      data
      isLink
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBulletItem = /* GraphQL */ `
  subscription OnCreateBulletItem {
    onCreateBulletItem {
      id
      items {
        id
        type
        data
        isLink
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBulletItem = /* GraphQL */ `
  subscription OnUpdateBulletItem {
    onUpdateBulletItem {
      id
      items {
        id
        type
        data
        isLink
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBulletItem = /* GraphQL */ `
  subscription OnDeleteBulletItem {
    onDeleteBulletItem {
      id
      items {
        id
        type
        data
        isLink
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
