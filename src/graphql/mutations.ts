/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      url
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      url
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      url
      description
      createdAt
      updatedAt
    }
  }
`;
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
export const createPortfolioItem = /* GraphQL */ `
  mutation CreatePortfolioItem(
    $input: CreatePortfolioItemInput!
    $condition: ModelPortfolioItemConditionInput
  ) {
    createPortfolioItem(input: $input, condition: $condition) {
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
export const updatePortfolioItem = /* GraphQL */ `
  mutation UpdatePortfolioItem(
    $input: UpdatePortfolioItemInput!
    $condition: ModelPortfolioItemConditionInput
  ) {
    updatePortfolioItem(input: $input, condition: $condition) {
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
export const deletePortfolioItem = /* GraphQL */ `
  mutation DeletePortfolioItem(
    $input: DeletePortfolioItemInput!
    $condition: ModelPortfolioItemConditionInput
  ) {
    deletePortfolioItem(input: $input, condition: $condition) {
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
export const createContentItem = /* GraphQL */ `
  mutation CreateContentItem(
    $input: CreateContentItemInput!
    $condition: ModelContentItemConditionInput
  ) {
    createContentItem(input: $input, condition: $condition) {
      id
      type
      data
      isLink
      createdAt
      updatedAt
    }
  }
`;
export const updateContentItem = /* GraphQL */ `
  mutation UpdateContentItem(
    $input: UpdateContentItemInput!
    $condition: ModelContentItemConditionInput
  ) {
    updateContentItem(input: $input, condition: $condition) {
      id
      type
      data
      isLink
      createdAt
      updatedAt
    }
  }
`;
export const deleteContentItem = /* GraphQL */ `
  mutation DeleteContentItem(
    $input: DeleteContentItemInput!
    $condition: ModelContentItemConditionInput
  ) {
    deleteContentItem(input: $input, condition: $condition) {
      id
      type
      data
      isLink
      createdAt
      updatedAt
    }
  }
`;
export const createBulletItem = /* GraphQL */ `
  mutation CreateBulletItem(
    $input: CreateBulletItemInput!
    $condition: ModelBulletItemConditionInput
  ) {
    createBulletItem(input: $input, condition: $condition) {
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
export const updateBulletItem = /* GraphQL */ `
  mutation UpdateBulletItem(
    $input: UpdateBulletItemInput!
    $condition: ModelBulletItemConditionInput
  ) {
    updateBulletItem(input: $input, condition: $condition) {
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
export const deleteBulletItem = /* GraphQL */ `
  mutation DeleteBulletItem(
    $input: DeleteBulletItemInput!
    $condition: ModelBulletItemConditionInput
  ) {
    deleteBulletItem(input: $input, condition: $condition) {
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
