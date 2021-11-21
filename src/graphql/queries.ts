/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      url
      description
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tag
        title
        content {
          ... on PortfolioItem {
            id
            title
            content
            createdAt
            updatedAt
          }
          ... on BulletItem {
            id
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
      nextToken
    }
  }
`;
export const getPortfolioItem = /* GraphQL */ `
  query GetPortfolioItem($id: ID!) {
    getPortfolioItem(id: $id) {
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
export const listPortfolioItems = /* GraphQL */ `
  query ListPortfolioItems(
    $filter: ModelPortfolioItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolioItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getContentItem = /* GraphQL */ `
  query GetContentItem($id: ID!) {
    getContentItem(id: $id) {
      id
      type
      data
      isLink
      createdAt
      updatedAt
    }
  }
`;
export const listContentItems = /* GraphQL */ `
  query ListContentItems(
    $filter: ModelContentItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        data
        isLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBulletItem = /* GraphQL */ `
  query GetBulletItem($id: ID!) {
    getBulletItem(id: $id) {
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
export const listBulletItems = /* GraphQL */ `
  query ListBulletItems(
    $filter: ModelBulletItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBulletItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
