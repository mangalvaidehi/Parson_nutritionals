import type { Schema, Attribute } from '@strapi/strapi';

export interface HomePageAwardSection extends Schema.Component {
  collectionName: 'components_home_page_award_sections';
  info: {
    displayName: 'AwardSection';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface HomePageCustomerSection extends Schema.Component {
  collectionName: 'components_home_page_customer_sections';
  info: {
    displayName: 'CustomerSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface HomePageExperienceSection extends Schema.Component {
  collectionName: 'components_home_page_experience_sections';
  info: {
    displayName: 'ExperienceSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface HomePageImageCarousel extends Schema.Component {
  collectionName: 'components_page_image_carousels';
  info: {
    displayName: 'Header';
    icon: 'archive';
    description: '';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
    stats: Attribute.Component<'page.stats', true> & Attribute.Required;
  };
}

export interface PageContactUs extends Schema.Component {
  collectionName: 'components_page_contactuses';
  info: {
    displayName: 'ContactUs';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
    btn_text: Attribute.String;
  };
}

export interface PageHeaderWithContent extends Schema.Component {
  collectionName: 'components_page_header_with_contents';
  info: {
    displayName: 'HeaderWithContent';
    description: '';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
    content: Attribute.Component<'page.text-content'> & Attribute.Required;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'globe';
  };
  attributes: {
    cover: Attribute.Media & Attribute.Required;
  };
}

export interface PageIconTitleContent extends Schema.Component {
  collectionName: 'components_page_icon_title_contents';
  info: {
    displayName: 'IconTitleContent';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
  };
}

export interface PageImageTextButton extends Schema.Component {
  collectionName: 'components_page_image_text_buttons';
  info: {
    displayName: 'ImageContentButton';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
    btn_text: Attribute.String & Attribute.Required;
  };
}

export interface PageImageTitle extends Schema.Component {
  collectionName: 'components_page_image_titles';
  info: {
    displayName: 'ImageContent';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    content: Attribute.String;
  };
}

export interface PageListItems extends Schema.Component {
  collectionName: 'components_page_list_items';
  info: {
    displayName: 'IconContent';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
  };
}

export interface PageMapLocation extends Schema.Component {
  collectionName: 'components_page_map_locations';
  info: {
    displayName: 'MapLocation';
    description: '';
  };
  attributes: {
    LocationName: Attribute.String & Attribute.Required;
    LocationIcon: Attribute.Media & Attribute.Required;
    RedirectUrl: Attribute.String;
    Latitude: Attribute.String;
    Longitude: Attribute.String;
  };
}

export interface PageRichImageContent extends Schema.Component {
  collectionName: 'components_page_rich_image_contents';
  info: {
    displayName: 'ImageRichLogoContent';
    description: '';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
    content: Attribute.Component<'page.rich-logo-content'> & Attribute.Required;
  };
}

export interface PageRichImageText extends Schema.Component {
  collectionName: 'components_page_rich_image_texts';
  info: {
    displayName: 'ImageRichContent';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'page.text-block'> & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
  };
}

export interface PageRichLogoContent extends Schema.Component {
  collectionName: 'components_page_rich_logo_contents';
  info: {
    displayName: 'RichLogoContent';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
    logos: Attribute.Media;
  };
}

export interface PageStats extends Schema.Component {
  collectionName: 'components_page_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface PageStrengths extends Schema.Component {
  collectionName: 'components_page_strengths';
  info: {
    displayName: 'Strengths';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    points: Attribute.Component<'page.list-items', true>;
    media: Attribute.Media;
  };
}

export interface PageTextBlock extends Schema.Component {
  collectionName: 'components_page_text_blocks';
  info: {
    displayName: 'RichContent';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText;
  };
}

export interface PageTextContent extends Schema.Component {
  collectionName: 'components_page_text_contents';
  info: {
    displayName: 'Content';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text;
  };
}

export interface PageTextLogo extends Schema.Component {
  collectionName: 'components_page_text_logos';
  info: {
    displayName: 'LogoContent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    logos: Attribute.Media;
  };
}

export interface PageValueItem extends Schema.Component {
  collectionName: 'components_page_value_items';
  info: {
    displayName: 'ValueItem';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText;
  };
}

export interface PageValues extends Schema.Component {
  collectionName: 'components_page_values';
  info: {
    displayName: 'Values';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'page.value-item', true> & Attribute.Required;
  };
}

export interface WorkPgBreakthroughBody extends Schema.Component {
  collectionName: 'components_work_pg_breakthrough_bodies';
  info: {
    displayName: 'BreakthroughBody';
  };
  attributes: {
    number: Attribute.Integer;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface WorkPgBreakthroughFooter extends Schema.Component {
  collectionName: 'components_work_pg_breakthrough_footers';
  info: {
    displayName: 'BreakthroughFooter';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    tt: Attribute.String;
  };
}

export interface WorkPgBreakthroughHeader extends Schema.Component {
  collectionName: 'components_work_pg_breakthrough_headers';
  info: {
    displayName: 'BreakthroughHeader';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface WorkPgBreakthrough extends Schema.Component {
  collectionName: 'components_work_pg_breakthroughs';
  info: {
    displayName: 'Breakthrough';
  };
  attributes: {
    header: Attribute.Component<'work-pg.breakthrough-header'>;
    body: Attribute.Component<'work-pg.breakthrough-body'>;
    footer: Attribute.Component<'work-pg.breakthrough-footer'>;
  };
}

export interface WorkPgSection1 extends Schema.Component {
  collectionName: 'components_work_pg_section1s';
  info: {
    displayName: 'Section1';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'page.text-content'>;
    Breakthrough: Attribute.Component<'work-pg.breakthrough', true>;
  };
}

export interface WorkPgSection2Body extends Schema.Component {
  collectionName: 'components_work_pg_section2_bodies';
  info: {
    displayName: 'Section2Body';
  };
  attributes: {
    media: Attribute.Media;
  };
}

export interface WorkPgSection2 extends Schema.Component {
  collectionName: 'components_work_pg_section2s';
  info: {
    displayName: 'Section2';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'page.text-content'>;
    blocks: Attribute.Component<'page.text-content', true>;
    LogoBlock: Attribute.Component<'page.text-logo'>;
    body_media: Attribute.Media;
    MapLocation: Attribute.Component<'page.map-location', true> &
      Attribute.Required;
  };
}

export interface WorkPgSection3 extends Schema.Component {
  collectionName: 'components_work_pg_section3s';
  info: {
    displayName: 'Section3';
    description: '';
  };
  attributes: {
    Header: Attribute.Component<'page.text-content'>;
  };
}

export interface WorkPgSection4 extends Schema.Component {
  collectionName: 'components_work_pg_section4s';
  info: {
    displayName: 'Section4';
  };
  attributes: {
    Header: Attribute.Component<'page.text-content'>;
    FacilitesList: Attribute.Component<'page.image-title', true>;
  };
}

export interface WorkPgSection5 extends Schema.Component {
  collectionName: 'components_work_pg_section5s';
  info: {
    displayName: 'Section5';
  };
  attributes: {
    Header: Attribute.Component<'page.text-content'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-page.award-section': HomePageAwardSection;
      'home-page.customer-section': HomePageCustomerSection;
      'home-page.experience-section': HomePageExperienceSection;
      'home-page.image-carousel': HomePageImageCarousel;
      'page.contact-us': PageContactUs;
      'page.header-with-content': PageHeaderWithContent;
      'page.header': PageHeader;
      'page.icon-title-content': PageIconTitleContent;
      'page.image-text-button': PageImageTextButton;
      'page.image-title': PageImageTitle;
      'page.list-items': PageListItems;
      'page.map-location': PageMapLocation;
      'page.rich-image-content': PageRichImageContent;
      'page.rich-image-text': PageRichImageText;
      'page.rich-logo-content': PageRichLogoContent;
      'page.stats': PageStats;
      'page.strengths': PageStrengths;
      'page.text-block': PageTextBlock;
      'page.text-content': PageTextContent;
      'page.text-logo': PageTextLogo;
      'page.value-item': PageValueItem;
      'page.values': PageValues;
      'work-pg.breakthrough-body': WorkPgBreakthroughBody;
      'work-pg.breakthrough-footer': WorkPgBreakthroughFooter;
      'work-pg.breakthrough-header': WorkPgBreakthroughHeader;
      'work-pg.breakthrough': WorkPgBreakthrough;
      'work-pg.section1': WorkPgSection1;
      'work-pg.section2-body': WorkPgSection2Body;
      'work-pg.section2': WorkPgSection2;
      'work-pg.section3': WorkPgSection3;
      'work-pg.section4': WorkPgSection4;
      'work-pg.section5': WorkPgSection5;
    }
  }
}
