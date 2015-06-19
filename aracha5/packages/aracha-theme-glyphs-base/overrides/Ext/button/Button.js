/**
 * Overrides for Button class
 */
Ext.define('overrides.button.Button', {
    override: 'Ext.button.Button',

    /**
     * Override that removes the blank space (&#160;)
     */
    iconTpl:
        '<span id="{id}-btnIconEl" data-ref="btnIconEl" role="presentation" unselectable="on" class="{baseIconCls} ' +
                '{baseIconCls}-{ui} {iconCls} {glyphCls}{childElCls}" style="' +
            '<tpl if="iconUrl">background-image:url({iconUrl});</tpl>' +
            '<tpl if="glyph && glyphFontFamily">font-family:{glyphFontFamily};</tpl>">' +
            '<tpl if="glyph">&#{glyph};</tpl>' +
            // override to remove the below blank space which throws off glyphs
            //<tpl if="iconCls || iconUrl">&#160;</tpl>' +
        '</span>'

});
