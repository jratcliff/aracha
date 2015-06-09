Ext.define('KitchenSink.view.ThemeSwitcher', function() {
    var theme = location.href.match(/(.*)[\/](.*theme.*)\//);

    theme = theme && theme[2];

    if (!Ext.themeName) {
        Ext.themeName = theme;
    }

    return {
        extend: 'Ext.Container',
        xtype: 'themeSwitcher',
        id: 'theme-switcher',
        margin: '0 10 0 0',
        layout: 'hbox',
        initComponent: function() {
            this.items = [{
                xtype: 'combo',
                id: 'theme-switcher-combo',
                width: 200,
                labelWidth: 50,
                fieldLabel: 'Theme',
                displayField: 'name',
                valueField: 'value',
                margin: '0 5 0 0',
                store: Ext.create('Ext.data.Store', {
                    fields: ['value', 'name'],
                    data : [
                        { value: 'ext-theme-access', name: 'Accessibility' },

                        { value: 'ext-theme-classic', name: 'Classic' },
                        { value: 'aracha-theme-glyphs-classic', name: 'Classic w/Glyphs' },

                        { value: 'ext-theme-gray', name: 'Gray' },
                        { value: 'aracha-theme-glyphs-gray', name: 'Gray w/Glyphs' },

                        { value: 'ext-theme-neptune', name: 'Neptune' },
                        { value: 'aracha-theme-glyphs-neptune', name: 'Neptune w/Glyphs' }
                    ]
                }),
                value: theme,
                listeners: {
                    select: function(combo) {
                        location.href = location.href.replace(
                            theme, combo.getValue()
                        );
                    }
                }
            }, {
                xtype: 'button',
                hidden: true, // !(Ext.repoDevMode || location.href.indexOf('qa.sencha.com') !== -1),
                enableToggle: true,
                text: 'RTL',
                margin: '0 5 0 0',
                listeners: {
                    toggle: function(btn, pressed) {
                        // TODO: handle rtl switching
                    }
                }
            }];

            this.callParent();
        }
    };
});