/**
 * Defaults and other overrides for Tabs
 */
Ext.define('overrides.tab.Tab', {
    override: 'Ext.tab.Tab',

    // since we show a glyph and hide the framework's image, we need to set
    // closeText to null so that it doesn't mess up our glyph
    closeText: null

});