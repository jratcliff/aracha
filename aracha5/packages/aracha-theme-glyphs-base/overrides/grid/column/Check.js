/**
 * Override that replaces wraps 'img' tag with a 'div' so that a font icon (glyph) can
 * be used instead of an image.
 */
Ext.define('overrides.grid.column.Check', {
    override: 'Ext.grid.column.Check',


    defaultRenderer : function(value, cellValues) {
        var cssPrefix = Ext.baseCSSPrefix,
            cls = cssPrefix + 'grid-checkcolumn';

        if (this.disabled) {
            cellValues.tdCls += ' ' + this.disabledCls;
        }
        if (value) {
            cls += ' ' + cssPrefix + 'grid-checkcolumn-checked';
        }
        return '<div class="' + cls + '" ><img class="' + cls + '"/></div>';
    }

});
