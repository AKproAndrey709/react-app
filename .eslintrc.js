module.exports = {
	"env": {
		"commonjs": true,
		"es2021": true
	},
	"extends": "plugin:react/recommended",
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"plugins": [
		"@typescript-eslint",
		"react"
	],
	"rules": {
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": "error",
		"react/prop-types": "off"
	}
}
