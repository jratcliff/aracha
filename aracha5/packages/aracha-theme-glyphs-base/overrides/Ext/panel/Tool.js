/**
 * Defaults and other overrides for Tools
 */
Ext.define('overrides.panel.Tool', {
    override: 'Ext.panel.Tool',

    // custom renderTpl to support icon fonts (glyphs) instead of images
    // - replaced <img> tag with <div>
    // - changed the base class from {baseCls}-img to {baseCls}-glyph
    // - added css for new x-glyph class in sass/src/Ext/panel/Tool.scss
    renderTpl: [
        '<div id="{id}-toolEl" data-ref="toolEl" class="{baseCls}-glyph {baseCls}-{type}' +
            '{childElCls}" role="presentation"></div>'
    ]

});
