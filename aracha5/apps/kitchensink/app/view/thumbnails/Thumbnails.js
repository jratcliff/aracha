Ext.define('KitchenSink.view.thumbnails.Thumbnails', {
    extend: 'Ext.view.View',
    xtype: 'thumbnails',
    cls: 'thumbnails',
    reference: 'contentView',
    region: 'center',
    store: 'Thumbnails',
    itemSelector: '.thumbnail-item',

    initComponent: function() {
        var backgrounds = {
            'defaultBackground'     : 'border-square',
            'crisp'                 : 'border-circle',
            'crisp-glyphs'          : 'border-circle',
            'crisp-touch'           : 'circle',
            'crisp-touch-glyphs'    : 'circle',
            'neptune'               : 'border-square',
            'neptune-glyphs'        : 'border-square',
            'neptune-touch'         : 'square',
            'neptune-touch-glyphs'  : 'square',
            'classic'               : 'rounded-square',
            'classic-glyphs'        : 'rounded-square',
            'gray'                  : 'rounded-square',
            'gray-glyphs'           : 'rounded-square'
        };

        this.tpl =
            '<tpl for=".">' +
                '<div class="thumbnail-item">' +
                    '<div class="thumbnail-icon-wrap icon-' + (backgrounds[Ext.themeName] ? backgrounds[Ext.themeName] : backgrounds.defaultBackground) + '">' +
                        '<div class="thumbnail-icon icon-{id}"></div>' +
                    '</div>' +
                    '<div class="thumbnail-text">{text}</div>' +
                '</div>' +
            '</tpl>';

        this.callParent();
    }
});
