import environment from './environment';
import { TCustomAttribute } from 'aurelia-i18n';
import Backend from 'i18next-xhr-backend';
import "multiple-select-modified"
import 'bootstrap';


export function configure(aurelia) {
  aurelia.use.standardConfiguration().feature('resources');

  aurelia.use.plugin('aurelia-slickgrid', config => {
    // load necessary Flatpickr Locale(s), but make sure it's imported AFTER loading Aurelia-Slickgrid plugin
    import('flatpickr/dist/l10n/fr');

    // change any of the default global options
    config.options.gridMenu.iconCssClass = 'fa fa-bars';
  });

  // aurelia i18n to handle multiple locales
  aurelia.use.plugin('aurelia-i18n', (instance) => {
    const aliases = ['t', 'i18n'];
    // add aliases for 't' attribute
    TCustomAttribute.configureAliases(aliases);

    // register backend plugin
    instance.i18next.use(Backend);

    return instance.setup({
      backend: {
        loadPath: './assets/i18n/{{lng}}/{{ns}}.json',
      },
      lng: 'en',
      ns: ['aurelia-slickgrid'],
      defaultNS: 'aurelia-slickgrid',
      attributes: ['t', 'i18n'],
      fallbackLng: 'en',
      debug: false
    });
  });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
