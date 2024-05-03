import type { Schema, Attribute } from '@strapi/strapi';

export interface ConnectionsConnectionBlock extends Schema.Component {
  collectionName: 'components_connections_connection_blocks';
  info: {
    displayName: 'Connection block';
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'connections.connection-block',
      'oneToMany',
      'api::project.project'
    >;
    Role: Attribute.Enumeration<
      ['writing', 'research', 'curation', 'creation', 'teaching']
    >;
  };
}

export interface ConnectionsLeadsTo extends Schema.Component {
  collectionName: 'components_connections_leads_tos';
  info: {
    displayName: 'Leads to';
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'connections.leads-to',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface ConnectionsPartOf extends Schema.Component {
  collectionName: 'components_connections_part_ofs';
  info: {
    displayName: 'Part of';
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'connections.part-of',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface ConnectionsTest extends Schema.Component {
  collectionName: 'components_connections_tests';
  info: {
    displayName: 'test';
  };
  attributes: {
    Test: Attribute.String;
  };
}

export interface MediaImageGallery extends Schema.Component {
  collectionName: 'components_images_image_galleries';
  info: {
    displayName: 'Image gallery';
    description: '';
  };
  attributes: {
    Images: Attribute.Media;
  };
}

export interface MediaImage extends Schema.Component {
  collectionName: 'components_media_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Caption: Attribute.String;
  };
}

export interface MediaPdfEmbed extends Schema.Component {
  collectionName: 'components_media_pdf_embeds';
  info: {
    displayName: 'PDF embed';
    description: '';
  };
  attributes: {
    PDF: Attribute.Media;
    Caption: Attribute.String;
  };
}

export interface MediaSoundEmbed extends Schema.Component {
  collectionName: 'components_media_sound_embeds';
  info: {
    displayName: 'Sound embed';
    description: '';
  };
  attributes: {
    Sound: Attribute.Media;
    Caption: Attribute.String;
  };
}

export interface MediaVideo extends Schema.Component {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'Video';
    description: '';
  };
  attributes: {
    Video: Attribute.Media;
    Caption: Attribute.String;
  };
}

export interface MetaItem extends Schema.Component {
  collectionName: 'components_meta_items';
  info: {
    displayName: 'item';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface MetaMetaContent extends Schema.Component {
  collectionName: 'components_meta_meta_contents';
  info: {
    displayName: 'Project meta';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'meta.item', true>;
  };
}

export interface TextTextBlock extends Schema.Component {
  collectionName: 'components_text_text_blocks';
  info: {
    displayName: 'Text block';
  };
  attributes: {
    Text: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'connections.connection-block': ConnectionsConnectionBlock;
      'connections.leads-to': ConnectionsLeadsTo;
      'connections.part-of': ConnectionsPartOf;
      'connections.test': ConnectionsTest;
      'media.image-gallery': MediaImageGallery;
      'media.image': MediaImage;
      'media.pdf-embed': MediaPdfEmbed;
      'media.sound-embed': MediaSoundEmbed;
      'media.video': MediaVideo;
      'meta.item': MetaItem;
      'meta.meta-content': MetaMetaContent;
      'text.text-block': TextTextBlock;
    }
  }
}
