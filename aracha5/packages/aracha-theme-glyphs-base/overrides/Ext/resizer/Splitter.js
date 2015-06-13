/**
 * Defaults and other overrides for Ext.resizer.Splitter
 */
Ext.define('overrides.resizer.Splitter', {
    override: 'Ext.resizer.Splitter',

    /**
     * Override to remove the blank space (&#160;)
     */
    renderTpl: [
        '<tpl if="collapsible===true">',
            '<div id="{id}-collapseEl" data-ref="collapseEl" role="presentation" class="', Ext.baseCSSPrefix, 'collapse-el ',
                //Ext.baseCSSPrefix, 'layout-split-{collapseDir}{childElCls}">&#160;',
                Ext.baseCSSPrefix, 'layout-split-{collapseDir}{childElCls}">',
            '</div>',
        '</tpl>'
    ]

});
