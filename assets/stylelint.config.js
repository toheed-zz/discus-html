module.exports = {
    "plugins": [
        "stylelint-selector-bem-pattern"
    ],
    "extends": "stylelint-config-sass-guidelines",
    "rules": {
        "declaration-no-important": true,
        "max-nesting-depth": 3,
        "order/properties-alphabetical-order": null,
        "plugin/selector-bem-pattern": {
            "preset": "bem",
            "implicitComponents": true,
            "utilitySelectors": "^.*$",
            "componentSelectors": function bemSelectors(block, presetOptions) {
                const ns = (presetOptions && presetOptions.namespace) ? presetOptions.namespace + '-' : '';
                const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
                const element = '(?:__' + WORD + ')?';
                const modifier = '(?:--' + WORD + '){0,2}';
                const attribute = '(?:\\[.+\\])?';
                return new RegExp('^\\.' + ns + block + element + modifier + attribute + '$');
            }
        }
    }
};