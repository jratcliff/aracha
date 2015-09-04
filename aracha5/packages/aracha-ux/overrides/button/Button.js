Ext.define('overrides.button.Button', {
    override: 'Ext.button.Button',

    /**
     * overide that removes the &#160; (a non-breaking space) from the iconCls
     * so that icon fonts (glyphs) will render without adding this extra space
     */
    iconTpl:
        '<span id="{id}-btnIconEl" data-ref="btnIconEl" role="presentation" unselectable="on" class="{baseIconCls} ' +
                '{baseIconCls}-{ui} {iconCls} {glyphCls}{childElCls}" style="' +
            '<tpl if="iconUrl">background-image:url({iconUrl});</tpl>' +
            '<tpl if="glyph && glyphFontFamily">font-family:{glyphFontFamily};</tpl>">' +
            '<tpl if="glyph">&#{glyph};</tpl><tpl if="iconCls || iconUrl"></tpl>' +
        '</span>'
});
