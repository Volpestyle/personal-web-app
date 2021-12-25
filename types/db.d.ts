enum ContentTypes {
  "HEADER",
  "BODY_TEXT",
  "IMAGE",
  "LIST_ITEM",
  "LINK",
}

export type SectionContent = {
  sectionId: string;
  contentType: ContentTypes;
};

enum HeaderSizes {
  "H1",
  "H2",
  "H3",
  "H4",
}

export type Header = {
  size: HeaderSizes;
};

export type Text = {
  text: string;
};

export type UrlAsset = {
  url: string;
  metaInfoTxt: string;
};
