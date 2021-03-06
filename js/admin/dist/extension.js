'use strict';

System.register('flagrow/patronage/components/PatronageSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, PatronageSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      PatronageSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(PatronageSettingsModal, _SettingsModal);

        function PatronageSettingsModal() {
          babelHelpers.classCallCheck(this, PatronageSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (PatronageSettingsModal.__proto__ || Object.getPrototypeOf(PatronageSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(PatronageSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'PatronageSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('flagrow-patronage.admin.settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            this.groups = app.store.all('groups');

            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flagrow-patronage.admin.settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flagrow-patronage.client_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flagrow-patronage.admin.settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flagrow-patronage.client_secret') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flagrow-patronage.admin.settings.patron_group')
              ),
              m(
                'select',
                { name: 'patronGroup', value: this.setting('flagrow-patronage.patron-group'), bidi: this.setting('flagrow-patronage.patron-group') },
                this.groups.map(function (group) {
                  return m(
                    'option',
                    { value: group.id() },
                    group.namePlural()
                  );
                })
              )
            )];
          }
        }]);
        return PatronageSettingsModal;
      }(SettingsModal);

      _export('default', PatronageSettingsModal);
    }
  };
});;
'use strict';

System.register('flagrow/patronage/main', ['flarum/app', './components/PatronageSettingsModal'], function (_export, _context) {
  "use strict";

  var app, PatronageSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_componentsPatronageSettingsModal) {
      PatronageSettingsModal = _componentsPatronageSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('flagrow-patronage', function () {
        app.extensionSettings['flagrow-patronage'] = function () {
          return app.modal.show(new PatronageSettingsModal());
        };
      });
    }
  };
});