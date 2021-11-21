/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateImageInput = {
  id?: string | null,
  url: string,
  description?: string | null,
};

export type ModelImageConditionInput = {
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Image = {
  __typename: "Image",
  id: string,
  url: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateImageInput = {
  id: string,
  url?: string | null,
  description?: string | null,
};

export type DeleteImageInput = {
  id: string,
};

export type CreateSectionInput = {
  id?: string | null,
  tag?: string | null,
  title?: string | null,
};

export type ModelSectionConditionInput = {
  tag?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
};

export type Section = {
  __typename: "Section",
  id: string,
  tag?: string | null,
  title?: string | null,
  content?:  Array<SectionContentType | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type SectionContentType = PortfolioItem | BulletItem | ContentItem


export type PortfolioItem = {
  __typename: "PortfolioItem",
  id: string,
  title?: string | null,
  headingImage?: Image | null,
  content?: Array< ContentType | null > | null,
  createdAt: string,
  updatedAt: string,
};

export enum ContentType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
}


export type BulletItem = {
  __typename: "BulletItem",
  id: string,
  items?:  Array<ContentItem | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type ContentItem = {
  __typename: "ContentItem",
  id: string,
  type?: ContentType | null,
  data?: string | null,
  isLink?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSectionInput = {
  id: string,
  tag?: string | null,
  title?: string | null,
};

export type DeleteSectionInput = {
  id: string,
};

export type CreatePortfolioItemInput = {
  id?: string | null,
  title?: string | null,
  content?: Array< ContentType | null > | null,
};

export type ModelPortfolioItemConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelContentTypeListInput | null,
  and?: Array< ModelPortfolioItemConditionInput | null > | null,
  or?: Array< ModelPortfolioItemConditionInput | null > | null,
  not?: ModelPortfolioItemConditionInput | null,
};

export type ModelContentTypeListInput = {
  eq?: Array< ContentType | null > | null,
  ne?: Array< ContentType | null > | null,
  contains?: ContentType | null,
  notContains?: ContentType | null,
};

export type UpdatePortfolioItemInput = {
  id: string,
  title?: string | null,
  content?: Array< ContentType | null > | null,
};

export type DeletePortfolioItemInput = {
  id: string,
};

export type CreateContentItemInput = {
  id?: string | null,
  type?: ContentType | null,
  data?: string | null,
  isLink?: boolean | null,
};

export type ModelContentItemConditionInput = {
  type?: ModelContentTypeInput | null,
  data?: ModelStringInput | null,
  isLink?: ModelBooleanInput | null,
  and?: Array< ModelContentItemConditionInput | null > | null,
  or?: Array< ModelContentItemConditionInput | null > | null,
  not?: ModelContentItemConditionInput | null,
};

export type ModelContentTypeInput = {
  eq?: ContentType | null,
  ne?: ContentType | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateContentItemInput = {
  id: string,
  type?: ContentType | null,
  data?: string | null,
  isLink?: boolean | null,
};

export type DeleteContentItemInput = {
  id: string,
};

export type CreateBulletItemInput = {
  id?: string | null,
};

export type ModelBulletItemConditionInput = {
  and?: Array< ModelBulletItemConditionInput | null > | null,
  or?: Array< ModelBulletItemConditionInput | null > | null,
  not?: ModelBulletItemConditionInput | null,
};

export type UpdateBulletItemInput = {
  id: string,
};

export type DeleteBulletItemInput = {
  id: string,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelImageConnection = {
  __typename: "ModelImageConnection",
  items:  Array<Image >,
  nextToken?: string | null,
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null,
  tag?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection",
  items:  Array<Section >,
  nextToken?: string | null,
};

export type ModelPortfolioItemFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelContentTypeListInput | null,
  and?: Array< ModelPortfolioItemFilterInput | null > | null,
  or?: Array< ModelPortfolioItemFilterInput | null > | null,
  not?: ModelPortfolioItemFilterInput | null,
};

export type ModelPortfolioItemConnection = {
  __typename: "ModelPortfolioItemConnection",
  items:  Array<PortfolioItem >,
  nextToken?: string | null,
};

export type ModelContentItemFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelContentTypeInput | null,
  data?: ModelStringInput | null,
  isLink?: ModelBooleanInput | null,
  and?: Array< ModelContentItemFilterInput | null > | null,
  or?: Array< ModelContentItemFilterInput | null > | null,
  not?: ModelContentItemFilterInput | null,
};

export type ModelContentItemConnection = {
  __typename: "ModelContentItemConnection",
  items:  Array<ContentItem >,
  nextToken?: string | null,
};

export type ModelBulletItemFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelBulletItemFilterInput | null > | null,
  or?: Array< ModelBulletItemFilterInput | null > | null,
  not?: ModelBulletItemFilterInput | null,
};

export type ModelBulletItemConnection = {
  __typename: "ModelBulletItemConnection",
  items:  Array<BulletItem >,
  nextToken?: string | null,
};

export type CreateImageMutationVariables = {
  input: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection?:  {
    __typename: "Section",
    id: string,
    tag?: string | null,
    title?: string | null,
    content:  Array<( {
        __typename: "PortfolioItem",
        id: string,
        title?: string | null,
        headingImage?:  {
          __typename: string,
          id: string,
          url: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        content?: Array< ContentType | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "BulletItem",
        id: string,
        items?:  Array< {
          __typename: string,
          id: string,
          type?: ContentType | null,
          data?: string | null,
          isLink?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "ContentItem",
        id: string,
        type?: ContentType | null,
        data?: string | null,
        isLink?: boolean | null,
        createdAt: string,
        updatedAt: string,
      }
    ) | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection?:  {
    __typename: "Section",
    id: string,
    tag?: string | null,
    title?: string | null,
    content:  Array<( {
        __typename: "PortfolioItem",
        id: string,
        title?: string | null,
        headingImage?:  {
          __typename: string,
          id: string,
          url: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        content?: Array< ContentType | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "BulletItem",
        id: string,
        items?:  Array< {
          __typename: string,
          id: string,
          type?: ContentType | null,
          data?: string | null,
          isLink?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "ContentItem",
        id: string,
        type?: ContentType | null,
        data?: string | null,
        isLink?: boolean | null,
        createdAt: string,
        updatedAt: string,
      }
    ) | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection?:  {
    __typename: "Section",
    id: string,
    tag?: string | null,
    title?: string | null,
    content:  Array<( {
        __typename: "PortfolioItem",
        id: string,
        title?: string | null,
        headingImage?:  {
          __typename: string,
          id: string,
          url: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        content?: Array< ContentType | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "BulletItem",
        id: string,
        items?:  Array< {
          __typename: string,
          id: string,
          type?: ContentType | null,
          data?: string | null,
          isLink?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "ContentItem",
        id: string,
        type?: ContentType | null,
        data?: string | null,
        isLink?: boolean | null,
        createdAt: string,
        updatedAt: string,
      }
    ) | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePortfolioItemMutationVariables = {
  input: CreatePortfolioItemInput,
  condition?: ModelPortfolioItemConditionInput | null,
};

export type CreatePortfolioItemMutation = {
  createPortfolioItem?:  {
    __typename: "PortfolioItem",
    id: string,
    title?: string | null,
    headingImage?:  {
      __typename: "Image",
      id: string,
      url: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: Array< ContentType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePortfolioItemMutationVariables = {
  input: UpdatePortfolioItemInput,
  condition?: ModelPortfolioItemConditionInput | null,
};

export type UpdatePortfolioItemMutation = {
  updatePortfolioItem?:  {
    __typename: "PortfolioItem",
    id: string,
    title?: string | null,
    headingImage?:  {
      __typename: "Image",
      id: string,
      url: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: Array< ContentType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePortfolioItemMutationVariables = {
  input: DeletePortfolioItemInput,
  condition?: ModelPortfolioItemConditionInput | null,
};

export type DeletePortfolioItemMutation = {
  deletePortfolioItem?:  {
    __typename: "PortfolioItem",
    id: string,
    title?: string | null,
    headingImage?:  {
      __typename: "Image",
      id: string,
      url: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: Array< ContentType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentItemMutationVariables = {
  input: CreateContentItemInput,
  condition?: ModelContentItemConditionInput | null,
};

export type CreateContentItemMutation = {
  createContentItem?:  {
    __typename: "ContentItem",
    id: string,
    type?: ContentType | null,
    data?: string | null,
    isLink?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentItemMutationVariables = {
  input: UpdateContentItemInput,
  condition?: ModelContentItemConditionInput | null,
};

export type UpdateContentItemMutation = {
  updateContentItem?:  {
    __typename: "ContentItem",
    id: string,
    type?: ContentType | null,
    data?: string | null,
    isLink?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentItemMutationVariables = {
  input: DeleteContentItemInput,
  condition?: ModelContentItemConditionInput | null,
};

export type DeleteContentItemMutation = {
  deleteContentItem?:  {
    __typename: "ContentItem",
    id: string,
    type?: ContentType | null,
    data?: string | null,
    isLink?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBulletItemMutationVariables = {
  input: CreateBulletItemInput,
  condition?: ModelBulletItemConditionInput | null,
};

export type CreateBulletItemMutation = {
  createBulletItem?:  {
    __typename: "BulletItem",
    id: string,
    items?:  Array< {
      __typename: "ContentItem",
      id: string,
      type?: ContentType | null,
      data?: string | null,
      isLink?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBulletItemMutationVariables = {
  input: UpdateBulletItemInput,
  condition?: ModelBulletItemConditionInput | null,
};

export type UpdateBulletItemMutation = {
  updateBulletItem?:  {
    __typename: "BulletItem",
    id: string,
    items?:  Array< {
      __typename: "ContentItem",
      id: string,
      type?: ContentType | null,
      data?: string | null,
      isLink?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBulletItemMutationVariables = {
  input: DeleteBulletItemInput,
  condition?: ModelBulletItemConditionInput | null,
};

export type DeleteBulletItemMutation = {
  deleteBulletItem?:  {
    __typename: "BulletItem",
    id: string,
    items?:  Array< {
      __typename: "ContentItem",
      id: string,
      type?: ContentType | null,
      data?: string | null,
      isLink?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages?:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      url: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id: string,
};

export type GetSectionQuery = {
  getSection?:  {
    __typename: "Section",
    id: string,
    tag?: string | null,
    title?: string | null,
    content:  Array<( {
        __typename: "PortfolioItem",
        id: string,
        title?: string | null,
        headingImage?:  {
          __typename: string,
          id: string,
          url: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        content?: Array< ContentType | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "BulletItem",
        id: string,
        items?:  Array< {
          __typename: string,
          id: string,
          type?: ContentType | null,
          data?: string | null,
          isLink?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "ContentItem",
        id: string,
        type?: ContentType | null,
        data?: string | null,
        isLink?: boolean | null,
        createdAt: string,
        updatedAt: string,
      }
    ) | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      tag?: string | null,
      title?: string | null,
      content:  Array<( {
          __typename: "PortfolioItem",
          id: string,
          title?: string | null,
          content?: Array< ContentType | null > | null,
          createdAt: string,
          updatedAt: string,
        } | {
          __typename: "BulletItem",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | {
          __typename: "ContentItem",
          id: string,
          type?: ContentType | null,
          data?: string | null,
          isLink?: boolean | null,
          createdAt: string,
          updatedAt: string,
        }
      ) | null > | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetPortfolioItemQueryVariables = {
  id: string,
};

export type GetPortfolioItemQuery = {
  getPortfolioItem?:  {
    __typename: "PortfolioItem",
    id: string,
    title?: string | null,
    headingImage?:  {
      __typename: "Image",
      id: string,
      url: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: Array< ContentType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPortfolioItemsQueryVariables = {
  filter?: ModelPortfolioItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPortfolioItemsQuery = {
  listPortfolioItems?:  {
    __typename: "ModelPortfolioItemConnection",
    items:  Array< {
      __typename: "PortfolioItem",
      id: string,
      title?: string | null,
      headingImage?:  {
        __typename: "Image",
        id: string,
        url: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      content?: Array< ContentType | null > | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetContentItemQueryVariables = {
  id: string,
};

export type GetContentItemQuery = {
  getContentItem?:  {
    __typename: "ContentItem",
    id: string,
    type?: ContentType | null,
    data?: string | null,
    isLink?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentItemsQueryVariables = {
  filter?: ModelContentItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentItemsQuery = {
  listContentItems?:  {
    __typename: "ModelContentItemConnection",
    items:  Array< {
      __typename: "ContentItem",
      id: string,
      type?: ContentType | null,
      data?: string | null,
      isLink?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetBulletItemQueryVariables = {
  id: string,
};

export type GetBulletItemQuery = {
  getBulletItem?:  {
    __typename: "BulletItem",
    id: string,
    items?:  Array< {
      __typename: "ContentItem",
      id: string,
      type?: ContentType | null,
      data?: string | null,
      isLink?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBulletItemsQueryVariables = {
  filter?: ModelBulletItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBulletItemsQuery = {
  listBulletItems?:  {
    __typename: "ModelBulletItemConnection",
    items:  Array< {
      __typename: "BulletItem",
      id: string,
      items?:  Array< {
        __typename: "ContentItem",
        id: string,
        type?: ContentType | null,
        data?: string | null,
        isLink?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateImageSubscription = {
  onCreateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImageSubscription = {
  onUpdateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImageSubscription = {
  onDeleteImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection?:  {
    __typename: "Section",
    id: string,
    tag?: string | null,
    title?: string | null,
    content:  Array<( {
        __typename: "PortfolioItem",
        id: string,
        title?: string | null,
        headingImage?:  {
          __typename: string,
          id: string,
          url: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        content?: Array< ContentType | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "BulletItem",
        id: string,
        items?:  Array< {
          __typename: string,
          id: string,
          type?: ContentType | null,
          data?: string | null,
          isLink?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "ContentItem",
        id: string,
        type?: ContentType | null,
        data?: string | null,
        isLink?: boolean | null,
        createdAt: string,
        updatedAt: string,
      }
    ) | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection?:  {
    __typename: "Section",
    id: string,
    tag?: string | null,
    title?: string | null,
    content:  Array<( {
        __typename: "PortfolioItem",
        id: string,
        title?: string | null,
        headingImage?:  {
          __typename: string,
          id: string,
          url: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        content?: Array< ContentType | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "BulletItem",
        id: string,
        items?:  Array< {
          __typename: string,
          id: string,
          type?: ContentType | null,
          data?: string | null,
          isLink?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "ContentItem",
        id: string,
        type?: ContentType | null,
        data?: string | null,
        isLink?: boolean | null,
        createdAt: string,
        updatedAt: string,
      }
    ) | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection?:  {
    __typename: "Section",
    id: string,
    tag?: string | null,
    title?: string | null,
    content:  Array<( {
        __typename: "PortfolioItem",
        id: string,
        title?: string | null,
        headingImage?:  {
          __typename: string,
          id: string,
          url: string,
          description?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        content?: Array< ContentType | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "BulletItem",
        id: string,
        items?:  Array< {
          __typename: string,
          id: string,
          type?: ContentType | null,
          data?: string | null,
          isLink?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
      } | {
        __typename: "ContentItem",
        id: string,
        type?: ContentType | null,
        data?: string | null,
        isLink?: boolean | null,
        createdAt: string,
        updatedAt: string,
      }
    ) | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePortfolioItemSubscription = {
  onCreatePortfolioItem?:  {
    __typename: "PortfolioItem",
    id: string,
    title?: string | null,
    headingImage?:  {
      __typename: "Image",
      id: string,
      url: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: Array< ContentType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePortfolioItemSubscription = {
  onUpdatePortfolioItem?:  {
    __typename: "PortfolioItem",
    id: string,
    title?: string | null,
    headingImage?:  {
      __typename: "Image",
      id: string,
      url: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: Array< ContentType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePortfolioItemSubscription = {
  onDeletePortfolioItem?:  {
    __typename: "PortfolioItem",
    id: string,
    title?: string | null,
    headingImage?:  {
      __typename: "Image",
      id: string,
      url: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: Array< ContentType | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentItemSubscription = {
  onCreateContentItem?:  {
    __typename: "ContentItem",
    id: string,
    type?: ContentType | null,
    data?: string | null,
    isLink?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentItemSubscription = {
  onUpdateContentItem?:  {
    __typename: "ContentItem",
    id: string,
    type?: ContentType | null,
    data?: string | null,
    isLink?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentItemSubscription = {
  onDeleteContentItem?:  {
    __typename: "ContentItem",
    id: string,
    type?: ContentType | null,
    data?: string | null,
    isLink?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBulletItemSubscription = {
  onCreateBulletItem?:  {
    __typename: "BulletItem",
    id: string,
    items?:  Array< {
      __typename: "ContentItem",
      id: string,
      type?: ContentType | null,
      data?: string | null,
      isLink?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBulletItemSubscription = {
  onUpdateBulletItem?:  {
    __typename: "BulletItem",
    id: string,
    items?:  Array< {
      __typename: "ContentItem",
      id: string,
      type?: ContentType | null,
      data?: string | null,
      isLink?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBulletItemSubscription = {
  onDeleteBulletItem?:  {
    __typename: "BulletItem",
    id: string,
    items?:  Array< {
      __typename: "ContentItem",
      id: string,
      type?: ContentType | null,
      data?: string | null,
      isLink?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
