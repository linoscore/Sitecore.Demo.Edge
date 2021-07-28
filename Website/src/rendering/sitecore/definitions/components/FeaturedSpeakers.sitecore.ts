// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the FeaturedSpeakers component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
const FeaturedSpeakers = function (manifest: Manifest): void {
  manifest.addComponent({
    name: 'FeaturedSpeakers',
    icon: SitecoreIcon.Person,
    fields: [
      { name: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'Subtitle', type: CommonFieldTypes.SingleLineText },
      {
        name: 'Speakers',
        type: CommonFieldTypes.ContentList,
        source: '/sitecore/content/CMP/Speakers',
      },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
};

export default FeaturedSpeakers;