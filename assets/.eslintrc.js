module.exports = {
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': false,
            "modules": true
        }
    },
    'env': {
        'browser': true
    },
    'rules': {
        'no-console': ['warn'],
        'quotes': ['warn', 'backtick']
    },
    'globals': {
        '$': true,
    }
}
