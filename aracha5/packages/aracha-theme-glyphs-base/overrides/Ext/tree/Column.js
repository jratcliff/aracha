/**
 * Defaults and other overrides for tree Columns
 */
Ext.define('overrides.tree.Column', {
    override: 'Ext.tree.Column',

    /**
     * override that replaces the 'img' tags the framework uses to 'div' tags so that
     * we can target the before/after pseudo elements for the icon fonts (glyphs)
     *
     * also wrapping the input tag for the checkbox with a div tag so that the pseudo
     * elements and icon fonts can be used for the checkboxes
     */
    cellTpl: [
        '<tpl for="lines">',
            '<div class="{parent.childCls} {parent.elbowCls}-glyph ',
            '{parent.elbowCls}-<tpl if=".">line<tpl else>empty</tpl>" role="presentation"></div>',
        '</tpl>',
        // override img with div
        '<div class="{childCls} {elbowCls}-glyph {elbowCls}',
            '<tpl if="isLast">-end</tpl><tpl if="expandable">-plus {expanderCls}</tpl>" role="presentation"></div>',
        '<tpl if="checked !== null">',
            // override by wrapping a div around the input
            '<div class="{checkboxCls}-wrap<tpl if="checked"> {checkboxCls}-checked</tpl>">',
                '<input type="button" {ariaCellCheckboxAttr}',
                    ' class="{childCls} {checkboxCls}<tpl if="checked"> {checkboxCls}-checked</tpl>"/>',
            '</div>',
        '</tpl>',
        '<div role="presentation" class="{childCls} {baseIconCls} ',
            '{baseIconCls}-<tpl if="leaf">leaf<tpl else>parent</tpl> {iconCls}"',
            '<tpl if="icon">style="background-image:url({icon})"</tpl> ></div>',
        '<tpl if="href">',
            '<a href="{href}" role="link" target="{hrefTarget}" class="{textCls} {childCls}">{value}</a>',
        '<tpl else>',
            '<span class="{textCls} {childCls}">{value}</span>',
        '</tpl>'
    ]

});